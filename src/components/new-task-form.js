import React from 'react'

const NewTaskForm = ({ newTodo }) => {
  const [taskText, setTaskText] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    newTodo(taskText)
    setTaskText((taskText) => taskText = '')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </form>
    </>
  )
}

export default NewTaskForm
