import React from 'react'
// import './Forum.css'

export const AdminForumItem = (props) => {
  return (
    <div className={`adminforumItem ${props.className}`}>
        <p className='forumId'>{ props.item.id }</p>
        <p className='forumTitle'>{ props.item.title }</p>
        <p className='forumDescription'>{ props.item.description }</p>
        <p className='forumCreateDate'>{ props.item.create }</p>
        { !props.className 
            ? 
                <div className='adminButtonGroups'>
                    <input type='button' value='Edit'/> 
                    <input type='button' value='Delete'/>    
                </div>
            :   
                <div className='adminButtonGroups'>
                    <input type='button' value='Create'/> 
                    <input type='button' value='Delete All'/>    
                </div>

        }
    </div>
  )
}
