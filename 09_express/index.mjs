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

app.listen(8000, () => {
  console.log("server is running");
});
