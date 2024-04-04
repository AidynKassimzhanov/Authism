import React from 'react'
import '../Forum/Forum.css'
import { useQuery } from 'react-query'
import { fetchUser, fetchUserAll } from '../../../http/userAPI'
import { UserItem } from './UserItem'

export const Users = () => {

  const {data, isLoading, error} = useQuery('users', fetchUserAll)

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
            // onClick={() => navigate('/admin/forum/create' )}
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
            <UserItem item={user}/>
          ))
      )}

    </div>
  )
}
