import React from 'react'
import './ForumItem.css'

export const ForumItem = (props) => {
  return (
    <div className='forumItem'>
        <div className="mainInfo">
            <div className="lastuser">
                <img src="./img/avatar.png" alt="avatar" />
                <div className="desc">
                    <p className="name">Antony Taylor</p>
                    <p className="time">2 минуты назад</p>
                </div>
            </div>
            <div className="title">
                <h5>Dream Home</h5>
            </div>
        </div>
        <div className="info">
            <div className="themes">
                <span>Темы:</span> 128
            </div>
            <div className="messages">
                <span>Сообщения:</span> 128 тыс.
            </div>
            <div className="date">
                <span>Дата:</span> 09.12.2023
            </div>
        </div>
    </div>
  )
}
