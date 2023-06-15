export const addLocalStorageData = (data) => {
 localStorage.setItem('todolist', JSON.stringify( data))
}