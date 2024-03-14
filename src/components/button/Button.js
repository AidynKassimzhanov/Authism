import React from 'react'
import './Button.css'

export const Button = ({title, className}) => {
  return (
    <button className={`btn ${className}`}>
        {title}
    </button>
  )
}
