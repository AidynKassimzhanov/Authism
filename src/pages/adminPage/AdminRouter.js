import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Forum } from './Forum/Forum'
import { Learn } from './Learn/Learn'
import { Users } from './users/Users'
import { CreateForum } from './Forum/CreateForum'
import { EditForum } from './Forum/EditForum'
import UserBlank from './users/UserBlank'
// import { UserBlank } from './users/UserBlank'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Navigate to="/admin/forum" /> } />
        
        <Route path="/forum" element={ <Forum /> } />
        <Route path="/forum/create" element={ <CreateForum /> } />
        <Route path="/forum/edit" element={ <EditForum /> } />
        
        <Route path="/users" element={ <Users /> } />
        <Route path="/users/edit" element={ <UserBlank /> } />
        <Route path="/users/create" element={ <UserBlank /> } />

        <Route path="/learn" element={ <Learn /> } />
        <Route path="/forum/blank" element={ <Learn /> } />


    </Routes>
  )
}
