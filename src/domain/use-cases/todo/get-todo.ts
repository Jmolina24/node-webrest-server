import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoReposotory } from "../../repositories/todo.repository";


export interface GetTodoUseCase {

    execute(id: number): Promise<TodoEntity>

}

export class GetTodo implements GetTodoUseCase {

    constructor(
        private readonly repository: TodoReposotory,
    ) { }


    execute(id: number): Promise<TodoEntity> {
        return this.repository.findById(id)
    }

}