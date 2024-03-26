import React from 'react'

const Task = ({
  newText,
  todo,
  isCompleted,
  isEdited,
  onDeleted,
  onEdited,
  onCompleted,
  createTime,
}) => {
  const [newTaskText, setNewTaskText] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newTaskText)
    setNewTaskText((newTaskText) => (newTaskText = ''))
  }

  return (
    <li className={isCompleted ? 'completed' : isEdited ? 'editing' : null}>
      <div className="view">
        <span onClick={onCompleted}>
          <input
            className="toggle"
            type="checkbox"
            checked={isCompleted}
            onChange={() => {}}
          />
          <label>
            <span className="description">{todo}</span>
            <span className="created">created {createTime} minutes ago</span>
          </label>
        </span>
        <button className="icon icon-edit" onClick={onEdited}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {isEdited && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
        </form>
      )}
    </li>
  )
}

export default Task
