import { CreateTodoDto, TodoDatasource, TodoEntity, TodoReposotory, UpdateTodoDto } from "../../domain";




export class TodoRepositiryImpl implements TodoReposotory {


    constructor(
        private readonly datasource: TodoDatasource

    ) { }


    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById(id)
    }
    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }




}




