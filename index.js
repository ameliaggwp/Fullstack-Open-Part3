const express = require("express");
const app = express();

require("dotenv").config();
const morgan = require("morgan");
const Person = require("./models/person");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use(morgan(":method :url :status :postContent"));

morgan.token("postContent", function getPostContent(req) {
  return JSON.stringify(req.body);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then((people) => {
    res.json(people);
  });
});

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id).then((person) => {
    res.json(person);
  });
});

/*
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
*/
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "Name or number missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});
