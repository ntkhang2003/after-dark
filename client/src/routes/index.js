import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminDashboard from '../pages/adminDashboard'
import CreateEvent from '../pages/createEvent'
import Login from '../pages/login'
import UserPage from '../pages/userPage'
import DetailEvent from '../pages/detailEvent'


const Router = () => {
    const myStorage = window.localStorage
    const currentName = myStorage.getItem('currentName')
    return (
        <Routes>
            <Route path='/' element={<Login myStorage={myStorage}/>} />
            <Route path='/user' element={<UserPage currentName={currentName}/>} />
            <Route path='/admin' element={<AdminDashboard currentName={currentName}/>} />
            <Route path='/create' element={<CreateEvent />} />
            <Route path='/detail' element={<DetailEvent />} />
        </Routes>
    )
}
export default Router