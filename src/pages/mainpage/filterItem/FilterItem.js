import React from 'react'
import './FilterItem.css'

export const FilterItem = (props) => {
  return (
    <div className='filterItem'> 
        <img src={props.item.img} alt="img" />
        <p className="title">
            {props.item.title}
        </p>
    </div>
  )
}
