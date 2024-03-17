import React from 'react'
import './Forum.css'
import { AdminForumItem } from './ForumItem'

export const Forum = () => {

    const item = {
        id: 1,
        title: 'dfsdf',
        description: 'dfgfdgdfgdfgdf',
        create: 'dsfdfs'
    }

    const itemCaption = {
        id: 'id',
        title: 'Title',
        description: 'Description',
        create: 'Create date'
    }

  return (
    <div className='adminForum'>
        <h2>All Forums</h2>

        <div className="forumHead">
            <AdminForumItem className={'head'} item={itemCaption}/>
            <AdminForumItem item={item}/>
        </div>
    </div>
  )
}
