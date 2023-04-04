import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  const handleCheckboxChange = (event, todoId) => {
    const checked = event.target.checked;
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: checked,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const unCompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2>Completed Todos</h2>
      <ol>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleCheckboxChange(e, todo.id)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ol>
      <h2>Uncompleted Todos</h2>
      <ol>
        {unCompletedTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleCheckboxChange(e, todo.id)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
