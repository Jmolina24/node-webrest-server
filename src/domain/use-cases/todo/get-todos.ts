import { TodoEntity } from "../../entities/todo.entity";
import { TodoReposotory } from "../../repositories/todo.repository";


export interface GetTodosUseCase {

    execute(): Promise<TodoEntity[]>

}

export class GetTodos implements GetTodosUseCase {

    constructor(
        private readonly repository: TodoReposotory,
    ) { }


    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll();
    }

}