import React, { useState } from 'react'

const NewTaskForm = () => {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskText)
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
