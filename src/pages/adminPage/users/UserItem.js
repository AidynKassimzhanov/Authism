import React from 'react'

export const UserItem = (props) => {
  return (
    <div className='adminforumItem'>
        <p className='forumId'>{ props.item.id }</p>
        <p className='forumTitle'>{ props.item.first_name }</p>
    </div>
  )
}
