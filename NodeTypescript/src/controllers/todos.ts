import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODOS: Todo[] = [];

export const CreateTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "Created the todo", createdTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
  if (TODOS.length < 1) return res.send("The Todolist is empty");
  res.json({ TodoList: TODOS });
};
