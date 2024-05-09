import { CreateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoReposotory } from "../../repositories/todo.repository";


export interface CreateTodoUseCase {

    execute(dto: CreateTodoDto): Promise<TodoEntity>

}

export class CreateTodo implements CreateTodoUseCase {

    constructor(
        private readonly repository: TodoReposotory,
    ) { }


    execute(dto: CreateTodoDto): Promise<TodoEntity> {
        return this.repository.create(dto)
    }

}