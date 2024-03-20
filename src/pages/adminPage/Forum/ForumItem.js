import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { deleteAllForums, deleteForum } from '../../../store/forumReducer';
import { useDispatch } from 'react-redux';

// import './Forum.css'

function TextComponent({ text, maxLength }) {
    if (text.length > maxLength) {
      return <div>{text.slice(0, maxLength)}...</div>;
    }
    return <div>{text}</div>;
}

function DeleteModal({ isOpen, onClose, onDelete, text }) {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          <p>{text}</p>
          <div className='modalBtnGroups'>
            <button onClick={onDelete} className='yesBtnModal'>Да</button>
            <button onClick={onClose} className='cancelBtnModal'>Отмена</button>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root') // указываем контейнер для портала
    );
  }

export const AdminForumItem = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMode, setDeleteMode] = useState('item');
    
    const handleDelete = (id) => {
        dispatch(deleteForum(id))
        setIsModalOpen(false); // закрываем модальное окно после удаления
    };

    const handleDeleteAll = () => {
        dispatch(deleteAllForums())
        setIsModalOpen(false); // закрываем модальное окно после удаления
    };

  return (
    <div className={`adminforumItem ${props.className}`} >
        <p className='forumId'>{ props.item.id }</p>
        <p className='forumTitle'>{ props.item.title }</p>
        <p className='forumDescription'> <TextComponent text={props.item.description} maxLength={40}/> </p>
        <p className='forumCreateDate'>{ props.item.create }</p>
        
        <DeleteModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            onDelete={() => deleteMode === 'item' ? handleDelete(props.item.id) : handleDeleteAll()} 
            text={deleteMode === 'item' ? "Вы уверены, что хотите удалить элемент?" : "Вы уверены, что хотите удалить все элементы?"}
        /> 
        
        { !props.className 
            ? 
                <div className='adminButtonGroups' >
                    <input 
                        type='button' 
                        value='Edit'
                        onClick={() => navigate('/admin/forum/edit', { state: { data: props.item }} )}
                    /> 
                    <input 
                        type='button' 
                        value='Delete' 
                        onClick={() => {
                            setIsModalOpen(true)
                            setDeleteMode('item')
                        }}
                    />  
                     
                </div>
            :   
                <div className='adminButtonGroups'>

                    <input 
                        type='button' 
                        value='Create' 
                        onClick={() => navigate('/admin/forum/create' )}
                    /> 
                    <input 
                        type='button' 
                        value='Delete All'
                        onClick={() => {
                            setIsModalOpen(true)
                            setDeleteMode('all')
                        }}
                    />    
                </div>

        }
    </div>
  )
}
