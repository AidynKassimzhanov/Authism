import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addForum } from '../../../store/forumReducer'
import { useNavigate } from 'react-router-dom'

export const CreateForum = (props) => {

  const [title, setTitle] = useState(props.title) || ''
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Обновляем соответствующее состояние в зависимости от имени поля ввода
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  }

  const handleClick = () => {
    const data = {
      title: title,
      description: description
    }
    dispatch(addForum(data))
    navigate('admin/forum')
  }

  return (
    <div className='blankForum'>
        <form action="">
            <h2>Create</h2>

            <p className='captionAdmin'>Title *</p>
            <input 
              className='adminInput'
              type="text" 
              name="title" 
              value={title}
              placeholder = "Title of forum"
              onChange={handleChange}
            />

            <p className='captionAdmin'>Title image</p>
            <input 
              className='adminButton'
              type="button" 
              value="Select a file"
            />

            <div>
              <p className='captionAdmin'>Description *</p>
              <textarea 
                className='adminInput'
                name='description' 
                value = {description}
                rows = {10}
                cols = {150}
                placeholder = "Text info"
                onChange={handleChange}
              />
            </div>

            <input 
              className='adminButton createForumBtn'
              type="button" 
              value="Create Forum"
              onClick={handleClick}
            />
        </form>
    </div>
  )
}
