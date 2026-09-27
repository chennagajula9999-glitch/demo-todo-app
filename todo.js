var todos = []; function addTodo(text) { todos.push({ text: text, done: false }); } function removeTodo(index) { todos.splice(index, 1); } module.exports = { addTodo, removeTodo, todos };
