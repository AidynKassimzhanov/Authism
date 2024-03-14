import React from 'react'
import './ForumBlock.css'
import { ForumItem } from '../forumItem/ForumItem'

export const ForumBlock = () => {
  return (
    <div className='forumBlock'>
        <div className="wrapper">
            <h2>Forum</h2>
            <div className="forumCards">
              <ForumItem />
              <ForumItem />
            </div>
        </div>
    </div>
  )
}
