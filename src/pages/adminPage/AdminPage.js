import React from 'react'
import './AdminPage.css'
import { AdminSideBar } from './adminSideBar/AdminSideBar'
import { useSelector } from 'react-redux'
import { AdminNavbar } from './adminNavbar/Navbar'
import { AdminRoutes } from './AdminRouter'

export const AdminPage = () => {

    const {isAdmin} = useSelector(state => state.main)
    
    return (
        <div className='adminPage'>

                <AdminSideBar />
                <div className="adminContent">
                    <AdminNavbar />
                    
                    <div className="wrapper">
                        <AdminRoutes />
                    </div>
                </div>

        </div>
    )
}
