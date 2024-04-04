import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UserItem = (props) => {
  const navigate = useNavigate()
  return (
    <div className='adminforumItem'>
        <p className='forumId'>{ props.item.id }</p>
        <p className='forumTitle'>{ props.item.first_name }</p>
        <p className='forumTitle'>{ props.item.Role.name }</p>

        <div className='adminButtonGroups' >
            <input 
                type='button' 
                value='Edit'
                // onClick={() => navigate('/admin/forum/edit', { state: { data: props.item }} )}
            /> 
            <input 
                type='button' 
                value='Delete' 
                // onClick={() => {
                //     setIsModalOpen(true)
                //     setDeleteMode('item')
                // }}
            />  
        </div>
    </div>
  )
}
