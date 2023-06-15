export const getLocalStorageData = () => {
  const storage = JSON.parse(localStorage.getItem('todolist')) || []
  return storage 
}