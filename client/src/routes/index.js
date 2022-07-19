import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminDashboard from '../pages/adminDashboard'
import CreateEvent from '../pages/createEvent'
import Login from '../pages/login'
import Register from '../pages/register'
import UserPage from '../pages/userPage'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/create' element={<CreateEvent />} />
        </Routes>
    )
}
export default Router