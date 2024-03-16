import React from 'react'
import './LearnItem.css'

export const LearnItem = ({item}) => {
  return (
    <div className='learnItem'>
        <img src={item.img} alt={item.img} />
        <div className="description">
            <p className="date">{item.date}</p>
            <h4 className="title">{item.title}</h4>
            <p className="hours">{item.hours}</p>
        </div>
        <button className="btn white">
            Readme
        </button>
    </div>
  )
}
