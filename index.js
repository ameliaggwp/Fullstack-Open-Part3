require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const morgan = require("morgan");
const Person = require("./models/person");

morgan.token("postContent", function getPostContent(req) {
  return JSON.stringify(req.body);
});

app.use(express.static("build"));
app.use(cors());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postContent"
  )
);

app.get("/api/persons", (req, res) => {
  Person.find({}).then((people) => {
    res.json(people);
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.get("/info", (req, res) => {
  const totalNumbers = persons.length;
  const date = new Date();
  res.send(
    "<div>Phonebook has info for " +
      totalNumbers +
      " people</div><br><div>" +
      date +
      "</div>"
  );
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  const duplicate = persons.find((person) => person.name === body.name);

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "Name or number missing",
    });
  }

  if (duplicate) {
    return res.status(403).json({
      error: "Name must be unique",
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  res.json(persons);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
