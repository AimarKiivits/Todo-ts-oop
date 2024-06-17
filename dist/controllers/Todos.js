"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    console.log('in createTodo');
    try {
        const task = req.body.task;
        const newTodo = new todo_1.Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new todo.',
            createdTodo: newTodo
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    try {
        res.status(201).json({ todos: todos });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getTodos = getTodos;
