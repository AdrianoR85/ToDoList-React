import { useState } from "react";
import { createContext } from "react";
import { getLocalStorageData } from "../../util/getData";
import { addLocalStorageData } from "../../util/addData";

export const AppContext = createContext()

export default function AppContent({children}) {
  const [storage, setStorage] = useState(getLocalStorageData());
  const [oldTask, setOldTask] = useState('')

  const addTask = (task) => {
    if(task) {
      const newStorage = [...storage, task]
      addLocalStorageData(newStorage)
      setStorage(newStorage)
    }
  }

  const getEditTask = (index)  => {
    const task = storage[index]
    setOldTask(task)
  }

  const deleteTask = (index) => {
    const newStorage = [...storage]
    newStorage.splice(index,1)
    addLocalStorageData(newStorage)
    setStorage(newStorage)
  }

  const editTask = (newTask) => {
    const idx = storage.indexOf(oldTask)
    const newStorage = [...storage]
    newStorage[idx] = newTask
    setStorage(newStorage)
    addLocalStorageData(newStorage)
  }

  return (
    <AppContext.Provider value={{
      addTask,
      setStorage,
      storage,
      deleteTask,
      getEditTask,
      oldTask,
      editTask
    }}
    >
      {children}
    </AppContext.Provider>
  )
}