import React from 'react'
import Task from './task'
const TaskList = ({ todos, onDeleted, onEdited, onCompleted }) => {
  const todoList = todos.map((todo) => (
    <Task
      key={todo.id}
      todo={todo.text}
      isCompleted={todo.isCompleted}
      isEdited={todo.isEdited}
      createTime="7"
      onDeleted={() => onDeleted(todo.id)}
      onEdited={() => onEdited(todo.id)}
      onCompleted={() => onCompleted(todo.id)}
    />
  ))
  return <ul className="todo-list">{todoList}</ul>
}

export default TaskList
