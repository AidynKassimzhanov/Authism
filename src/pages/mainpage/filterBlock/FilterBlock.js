import React from 'react'
import './FilterBlock.css'
import { FilterItem } from '../filterItem/FilterItem'

export const FilterBlock = () => {

    const filterData = [
        {
            img: './img/filter1.png',
            title: 'Communication'
        },
        {
            img: './img/filter2.png',
            title: 'Thinking'
        },
        {
            img: './img/filter3.png',
            title: 'Attitude'
        },
        {
            img: './img/filter4.jpg',
            title: 'Emphaty'
        },
        {
            img: './img/filter5.png',
            title: 'School subjects'
        },
    ]


  return (
    <div className='filterBlock'>
        <div className="wrapper">
            <h4>Filter Tags</h4>
            <div className='filterCards'>
                {filterData.map(item => <FilterItem item={item}/> )}
            </div>
        </div>
    </div>
  )
}
