import db from '../config/db.js';
//These are the simple form to perform type of operation 
const Todo = {
  getAll(callback) {
    db.query('SELECT * FROM todos', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },

  create(todo, callback) {
    db.query('INSERT INTO todos SET ?', todo, (err, result) => {
      if (err) throw err;
      callback(result.insertId);
    });
  },

  update(id, todo, callback) {
    db.query('UPDATE todos SET ? WHERE id = ?', [todo, id], (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  },

  delete(id, callback) {
    db.query('DELETE FROM todos WHERE id = ?', id, (err, result) => {
      if (err) throw err;
      callback(result.affectedRows);
    });
  }
};

export default Todo;
