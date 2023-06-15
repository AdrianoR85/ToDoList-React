import Row from '../Row'
import '../../style/rowlist.css'
import { useContext } from 'react'
import { AppContext } from '../Content'

export default function RowList() {
  const { storage, deleteTask, getEditTask } = useContext(AppContext)

  const handleDelete = (index) => {
    deleteTask(index)
  }

  const handleEdit = (index) => {
    getEditTask(index)
  }

  return(
    <ul>
      {storage.map((item, index) => (
        <Row 
          key={index} 
          name={item} 
          onDelete={() => handleDelete(index)}
          onEdit={() => handleEdit(index)}
        />
      ))}
    </ul>
  )
}