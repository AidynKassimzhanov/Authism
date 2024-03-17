import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Forum } from './Forum/Forum'
import { Learn } from './Learn/Learn'
import { Users } from './users/Users'

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Navigate to="/admin/forum" /> } />
        <Route path="/forum" element={ <Forum /> } />
        <Route path="/forum/blank" element={ <Forum /> } />
        <Route path="/learn" element={ <Learn /> } />
        <Route path="/forum/blank" element={ <Learn /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/forum/blank" element={ <Users /> } />
    </Routes>
  )
}
