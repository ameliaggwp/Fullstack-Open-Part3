const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

const generateId = () => {
  const id = Math.floor(Math.random() * 1000);

  return id;
};

let persons = [
  {
    name: "Harry Potter",
    number: "132-456-7890",
    id: 1,
  },
  {
    name: "Hermione Granger",
    number: "236-456-7890",
    id: 2,
  },
  {
    name: "Ron Weasley",
    number: "741-547-2518",
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Phonebook Backend</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
