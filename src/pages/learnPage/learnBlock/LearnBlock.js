import React, { useState } from 'react'
import './LearnBlock.css'
import { LearnItem } from '../learnItem/LearnItem'

export const LearnBlock = () => {

    const [learnList, setLearnList] = useState([
        {
            id: 0,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
        {
            id: 1,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
        {
            id: 2,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
        {
            id: 3,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
        {
            id: 4,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
        {
            id: 5,
            img: './img/learnItemImage.png',
            date: '03.12.2023',
            title: 'Communication',
            hours: '36h'
        }, 
    ])


  return (
    <div className='learnBlock'>
        <h2>Learn</h2>
        <div className="learnContainer">
            {learnList.map(item => 
                <LearnItem key={item.id} item={item}/>
            )}
            
        </div>
    </div>
  )
}
