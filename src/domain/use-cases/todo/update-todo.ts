import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoReposotory } from "../../repositories/todo.repository";


export interface UpdateTodoUseCase {

    execute(dto: UpdateTodoDto): Promise<TodoEntity>

}

export class UpdateTodo implements UpdateTodoUseCase {

    constructor(
        private readonly repository: TodoReposotory,
    ) { }


    execute(dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(dto)
    }

}