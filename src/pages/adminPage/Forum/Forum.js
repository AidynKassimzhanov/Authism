import React from 'react'
import './Forum.css'
import { AdminForumItem } from './ForumItem'
import { useSelector } from 'react-redux'



export const Forum = () => {

    const {forums} = useSelector(state => state.forum)

    const itemCaption = {
        id: 'id',
        title: 'Title',
        description: 'Description',
        create: 'Create date'
    }

  return (
    <div className='adminForum' >
        <h2>All Forums</h2>

        <div className="forumHead">
            <AdminForumItem className={'head'} item={itemCaption}/>
            {forums.map(item => 
                <AdminForumItem key={item.id} item={item}/>
            )}
            
        </div>
    </div>
  )
}
