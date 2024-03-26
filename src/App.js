import React from 'react'
import NewTaskForm from './components/new-task-form'
import TaskList from './components/task-list'
import Footer from './components/footer'
import './App.css'

function App() {
  const [currentData, setData] = React.useState([])

  const completedTodo = (id) => {
    setData(
      currentData.map((data) => {
        if (data.id === id) {
          data.isCompleted = !data.isCompleted
        }
        return data
      })
    )
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(16).slice(2),
      isCompleted: false,
      isEdited: false,
      text,
    }
    setData((currentData) => [...currentData, newTodo])
  }

  const deleteTodo = (id) => {
    setData((currentData) => {
      const i = currentData.findIndex((todo) => todo.id === id)
      return [...currentData.slice(0, i), ...currentData.slice(i + 1)]
    })
  }

  const editTodo = (id) => {
    setData(
      currentData.map((data) => {
        if (data.id === id) {
          data.text = 'hello'
          data.isEdited = !data.isEdited
        }
        return data
      })
    )
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm newTodo={addTodo} />
        </header>
        <section className="main">
          <TaskList
            todos={currentData}
            onDeleted={deleteTodo}
            onEdited={editTodo}
            onCompleted={completedTodo}
          />
          <Footer />
        </section>
      </section>
    </>
  )
}

export default App
