import React from 'react'
import { Button } from '../../components/button/Button'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { FilterBlock } from './filterBlock/FilterBlock'
import { ForumBlock } from './forumBlock/ForumBlock'

export const MainPage = () => {
  return (
    <div>

        <div className="wrapper">
          <FilterBlock />
          <ForumBlock />
        </div>

    </div>
  )
}
