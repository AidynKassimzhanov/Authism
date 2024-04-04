import React from 'react'
import '../Forum/Forum.css'
import { useQuery } from 'react-query'
import { fetchUser, fetchUserAll } from '../../../http/userAPI'
import { UserItem } from './UserItem'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

  const {data, isLoading, error} = useQuery('users', fetchUserAll)
  const navigate = useNavigate()

  return (
    <div className='adminUsers'>
      <h2>All Users</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className='adminforumItem head'>
        <p className='forumId'> id </p>
        <p className='forumTitle'> Username </p>
        <p className='forumTitle'> User Role </p>

        <div className='adminButtonGroups'>
          <input 
            type='button' 
            value='Create' 
            onClick={() => navigate('/admin/users/create' )}
          /> 
          <input 
            type='button' 
            value='Delete All'
            // onClick={() => {
            //     setIsModalOpen(true)
            //     setDeleteMode('all')
            // }}
          />    
        </div>
      </div>

      {data && (
          data.users.map(user => (
            <UserItem item={user} key={user.id}/>
          ))
      )}

    </div>
  )
}
