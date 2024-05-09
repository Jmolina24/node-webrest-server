import { Router } from "express"
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositiryImpl } from "../../infrastructure/repositories/todo.repository.impl";


export class TodoRoutes {

    static get routes(): Router {
        const router = Router()

        const datasource = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositiryImpl( datasource );        
        const todosController = new TodosController( todoRepository );
        
        
        router.get('/', todosController.getTodos);
        router.get('/:id', todosController.getTodosById);
        router.post('/', todosController.createTodo);
        router.put('/:id', todosController.updateTodo);
        router.delete('/:id', todosController.deleteTodo);


        
        return router;
    }


}




