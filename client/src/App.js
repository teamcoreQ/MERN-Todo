// App.js
import React, { useState } from 'react';
import './App.css';

/**
 * Represents a TodoApp component.
 * @component
 */
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    // The function is called when adding a new todo.
  
    // It checks if the 'inputValue' is not empty.
    if (inputValue) {
      // If the 'inputValue' is not empty, it adds a new todo to the 'todos' array.
  
      // It uses the spread operator (...) to create a new array.
      // The new array includes all existing todos ('...todos') and a new todo object.
      // The new todo object has a unique 'id' generated using Math.random(),
      // 'text' property set to the current value of 'inputValue', and 'status' set to 'Pending'.
      setTodos([...todos, { id: Math.random(), text: inputValue, status: 'Pending' }]);
  
      // After adding the new todo, it clears the 'inputValue' to reset the input field.
      setInputValue('');
    }
  };
  

  const deleteTodo = (id) => {
    // The function takes an 'id' parameter, representing the ID of the todo item to be deleted.
  
    // It uses the `filter` method on an array called 'todos'.
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // The `filter` method creates a new array ('updatedTodos') containing only those
    // elements from the original 'todos' array for which the given callback function
    // returns true. In this case, it keeps all todos whose 'id' is not equal to the
    // 'id' parameter passed to the function.
  
    // After filtering, the 'updatedTodos' array contains all todos except the one
    // with the specified 'id'.
  
    // The next line updates the 'todos' state with the newly filtered array.
    setTodos(updatedTodos);
    // 'setTodos' is presumably a state-setting function (possibly from React or another
    // state management library), and it's used here to update the state of 'todos' with
    // the filtered array, effectively removing the todo item with the specified 'id'.
  };
  

  const editTodo = (id, newText) => {
    // The function takes two parameters:
    // - 'id' represents the ID of the todo item to be edited.
    // - 'newText' is the new text that you want to set for the specified todo.
  
    // It uses the `map` method on an array called 'todos'.
    const updatedTodos = todos.map((todo) => {
      // The `map` method iterates over each element of the 'todos' array and
      // returns a new array with the modified elements.
  
      // For each todo in the array, it checks if the 'id' of the todo matches
      // the specified 'id' parameter.
      if (todo.id === id) {
        // If there is a match, it updates the 'text' property of that todo with
        // the provided 'newText'.
        todo.text = newText;
      }
  
      // It always returns the todo, whether modified or not.
      return todo;
    });
  
    // After mapping and potentially modifying the 'todos' array, the 'updatedTodos'
    // array now contains todos with the specified changes.
  
    // The next line updates the 'todos' state with the newly mapped array.
    setTodos(updatedTodos);
    // 'setTodos' is presumably a state-setting function (possibly from React or another
    // state management library), and it's used here to update the state of 'todos' with
    // the modified array, effectively editing the text of the specified todo item.
  };
  

  const toggleStatus = (id) => {
    // The function takes one parameter:
    // - 'id' represents the ID of the todo item whose status is to be toggled.
  
    // It uses the `map` method on an array called 'todos'.
    const updatedTodos = todos.map((todo) => {
      // The `map` method iterates over each element of the 'todos' array and
      // returns a new array with the modified elements.
  
      // For each todo in the array, it checks if the 'id' of the todo matches
      // the specified 'id' parameter.
      if (todo.id === id) {
        // If there is a match, it toggles the 'status' property of that todo.
        // If the current status is 'Pending', it sets it to 'Complete', and vice versa.
        todo.status = todo.status === 'Pending' ? 'Complete' : 'Pending';
      }
  
      // It always returns the todo, whether modified or not.
      return todo;
    });
  
    // After mapping and potentially modifying the 'todos' array, the 'updatedTodos'
    // array now contains todos with the status of the specified todo item toggled.
  
    // The next line updates the 'todos' state with the newly mapped array.
    setTodos(updatedTodos);
    // 'setTodos' is presumably a state-setting function (possibly from React or another
    // state management library), and it's used here to update the state of 'todos' with
    // the modified array, effectively toggling the status of the specified todo item.
  };
  

  return (
    <div className="todo-app">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.status === 'Complete' ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id, prompt('Edit todo', todo.text))}>
              Edit
            </button>
            <button onClick={() => toggleStatus(todo.id)}>
              {todo.status === 'Complete' ? 'Mark as Pending' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;