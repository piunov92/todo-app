import React, { useState } from 'react'

const Task = ({ todo, onDeleted, createTime }) => {
  const [okTask, setOkTask] = useState(false)
  const [checked, setChecked] = useState(false)

  const clickCompleted = () => {
    setChecked((checked) => !checked)
    setOkTask((okTask) => !okTask)
  }

  return (
    <li className={okTask ? 'completed' : ''}>
      <div className="view" onClick={clickCompleted}>
        <input className="toggle" type="checkbox" checked={checked} onChange={() => {}}/>
        <label>
          <span className="description">{todo}</span>
          <span className="created">created {createTime} minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    </li>
  )
}

export default Task
