import {FiEdit, FiTrash2} from 'react-icons/fi'
import { useState } from 'react';

import '../../style/row.css';

export default function Row(props) {
  const [concluded, setConcluded] = useState(false)
  
  const handleClick = () => {
    if(concluded) {
      setConcluded(false)
    } else{
      setConcluded(true)
    }
  }

  return (
    <li 
      className={concluded ? 'row-container concluded' : 'row-container'} 
      key={props.index}
    >
      <span onClick={ handleClick}>{props.name}</span>

      <div className='row-icons'>
        <button className='btn-edit' onClick={props.onEdit}>
          <FiEdit />
        </button>

        <button className='btn-remove' onClick={props.onDelete}>
          <FiTrash2/>
        </button>
      </div>
    </li>
  )
}