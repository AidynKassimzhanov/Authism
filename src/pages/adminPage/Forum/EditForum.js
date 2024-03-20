import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editForum } from '../../../store/forumReducer';

export const EditForum = () => {

  const location = useLocation();
  const data = location.state?.data;
  
  const [title, setTitle] = useState(data.title)
  const [image, setImage] = useState(data.image)
  const [description, setDescription] = useState(data.description)
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

  const handleClick = (id) => {
    const data = {
      id: id,
      title: title,
      description: description
    }
    dispatch(editForum(data))
    navigate('admin/forum')
  }


  return (
    <div className='blankForum'>
        <form action="">
            <h2>Edit</h2>
            <p>id: {data.id}</p>

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
              value="Save Forum"
              onClick={() => handleClick(data.id)}
            />
        </form>
    </div>
  )
}
