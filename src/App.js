import React, { useState } from 'react'
import NewTaskForm from './components/new-task-form'
import TaskList from './components/task-list'
import Footer from './components/footer'
import './App.css'

function App() {
  const data = [
    { id: 1, text: 'task id 1' },
    { id: 2, text: 'task id 2' },
    { id: 3, text: 'task id 3' },
  ]

  const [currentData, setData] = useState(data)

  const deleteTodo = (id) => {
    setData((currentData) => {
      const i = currentData.findIndex((todo) => todo.id === id)
      return [...currentData.slice(0, i), ...currentData.slice(i + 1)]
    })
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={currentData} onDeleted={deleteTodo} />
          <Footer />
        </section>
      </section>
    </>
  )
}

export default App
