import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoReposotory } from "../../repositories/todo.repository";


export interface DeleteTodoUseCase {

    execute(id: number): Promise<TodoEntity>

}

export class DeleteTodo implements DeleteTodoUseCase {

    constructor(
        private readonly repository: TodoReposotory,
    ) { }


    execute(id: number): Promise<TodoEntity> {
        return this.repository.deleteById(id)
    }

}