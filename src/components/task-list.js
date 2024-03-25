import React from 'react'
import Task from './task'
const TaskList = ({ todos, onDeleted }) => {
  const todoList = todos.map((todo) => (
    <Task
      key={todo.id}
      todo={todo.text}
      createTime="7"
      onDeleted={() => onDeleted(todo.id)}
    />
  ))
  return <ul className="todo-list">{todoList}</ul>
}

export default TaskList
