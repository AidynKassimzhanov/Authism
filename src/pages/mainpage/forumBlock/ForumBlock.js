import React from 'react'
import './ForumBlock.css'
import { ForumItem } from '../forumItem/ForumItem'
import { useSelector } from 'react-redux'

export const ForumBlock = () => {
  const {forums} = useSelector(state => state.forum)
  return (
    <div className='forumBlock'>
        <div className="wrapper">
            <h2>Forum</h2>
            <div className="forumCards">

            {forums.map(item => 
                <ForumItem key={item.id} item={item}/>
            )}

            </div>
        </div>
    </div>
  )
}
