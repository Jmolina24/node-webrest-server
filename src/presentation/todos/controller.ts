import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy Milk', completedAt: new Date(), updateAt: new Date() },
    { id: 2, text: 'Buy Bread', completedAt: null, updateAt: new Date() },
    { id: 3, text: 'Buy Butter', completedAt: new Date(), updateAt: new Date() },
];



export class TodosController {


    //* DI
    constructor() { }



    public getTodos = (req: Request, res: Response) => {
        return res.json(todos)
    }


    public getTodosById = (req: Request, res: Response) => {

        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({ error: `ID argument is not number` })

        const todo = todos.find(todo => todo.id === id);
        (todo) ? res.json(todo) : res.status(404).json({ error: `TODO with id ${id} not found` })

    }


    public createTodo = (req: Request, res: Response) => {

        const { text } = req.body;

        const newtodo = {
            id: todos.length + 1,
            text: text,
            completedAt: new Date(),
            updateAt: new Date()
        }
        todos.push(newtodo);

        res.json(newtodo)

    }


    public updateTodo = (req: Request, res: Response) => {
        const { text, completedAt } = req.body;
        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({ error: `ID argument is not number` })

        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(404).json({ error: `TODO with id ${id} not found` });


        todo.text = text || todo.text;
        (completedAt === null) ? todo.completedAt = null : todo.completedAt = new Date(completedAt || todo.completedAt)
        todo.updateAt = new Date();

        res.json(todo);
    }


    public deleteTodo = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `ID argument is not number` })
        const todo = todos.find(todo => todo.id === id);
        if (!todo) return res.status(404).json({ error: `TODO with id ${id} not found` });
        todos.splice(todos.indexOf(todo), 1);
        res.json(todo);
    }



}

