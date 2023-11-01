"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = exports.CreateTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const CreateTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo", createdTodo: newTodo });
};
exports.CreateTodo = CreateTodo;
const getTodo = (req, res, next) => {
    if (TODOS.length < 1)
        return res.send("The Todolist is empty");
    res.json({ TodoList: TODOS });
};
exports.getTodo = getTodo;
