import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoReposotory } from "../../domain";



export class TodosController {


    //* DI
    constructor(
        private readonly todoRepository: TodoReposotory
    ) { }



    public getTodos = async (req: Request, res: Response) => {

        const todos = await this.todoRepository.getAll();
        console.log(todos);
        return res.json(todos);
    }


    public getTodosById = async (req: Request, res: Response) => {

        const id = +req.params.id;

        try {
            const todo = await this.todoRepository.findById(id);
            return res.json(todo);

        } catch (error) {
            res.status(400).json({ error })
        }


    }


    public createTodo = async (req: Request, res: Response) => {

        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const todo = await this.todoRepository.create(createTodoDto!)
            res.json(todo);
        } catch (error) {
            console.log('s');
            res.status(400).json({ error });
        }


    }


    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;

        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id })

        if (error) return res.status(400).json({ error });


        try {
            const upddateTodo = await this.todoRepository.updateById(updateTodoDto!);
            res.json(upddateTodo);
        } catch (error) {
            res.status(400).json({ error })
        }


    }


    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;


        try {
            const deletedTodo = await this.todoRepository.deleteById(id);
            return res.json(deletedTodo);

        } catch (error) {
            res.status(400).json({ error })
        }



    }



}

