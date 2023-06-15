import { useContext, useEffect } from 'react'
import { AppContext } from '../Content'
import { useState } from 'react'

import '../../style/form.css'

export default function Form() {
  const [ task, setTask] = useState('')
  const { addTask, oldTask, editTask } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(oldTask) {
      editTask(task)
      setTask('')
    } else {
      console.log('no')
      addTask(task)
      setTask('')
    }
  }

  useEffect(() =>{
    setTask(oldTask)
  }, [oldTask])

  return (
    <form onSubmit={handleSubmit}>
      <h1>My Tasks</h1>
      <input 
        type="text" 
        name="task" 
        placeholder="Enter your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Resgister task</button>
    </form>
  )
}