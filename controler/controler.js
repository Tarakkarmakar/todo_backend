import Todo from '../models/todoModel.js';
// ALl todo functions are handled here in obj
const TodoController = {
  getAllTodos(req, res) {
    Todo.getAll(todos => res.status(200).json(todos));
  },

  createTodo(req, res) {
    const { title, description } = req.body;
    const todo = { title, description };
    Todo.create(todo, id => res.status(201).json({ message: "Todo created successfully", id }));
  },

  updateTodo(req, res) {
    const id = req.params.id;
    const { title, description } = req.body;
    const todo = { title, description };
    Todo.update(id, todo, () => res.status(200).json({ message: "Todo updated successfully" }));
  },

  deleteTodo(req, res) {
    const id = req.params.id;
    Todo.delete(id, () => res.status(200).json({ message: "Todo deleted successfully" }));
  }
};

export default TodoController;
