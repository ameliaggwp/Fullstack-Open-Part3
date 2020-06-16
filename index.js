const express = require("express");
const app = express();

app.use(express.json());

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
