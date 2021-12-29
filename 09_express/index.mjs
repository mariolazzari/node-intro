import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: Date.now(),
    text,
  };

  db.push(newTodo);

  res.status(201).json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(db);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todo = db.find(todo => todo.id === +id);
  res.json(todo);
});

app.listen(8000, () => {
  console.log("server is running");
});
