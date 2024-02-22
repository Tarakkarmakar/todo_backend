import express from 'express';
import TodoController from '../controler/controler.js';

const router = express.Router();
//THis is the all routes
router.get("/", TodoController.getAllTodos);
router.post("/", TodoController.createTodo);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

export default router;
