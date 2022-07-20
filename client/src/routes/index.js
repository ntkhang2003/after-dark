import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from '../pages/adminDashboard'
import CreateEvent from '../pages/createEvent'
import Login from '../pages/login'
// import Register from '../pages/register'
import UserPage from '../pages/userPage'
import ResultPage from '../pages/resultPage'
import DetailEvent from '../pages/detailEvent'

const Router = () => {
    const myStorage = window.localStorage
    const [currentUser, setCurrentUser] = useState(myStorage.getItem('userName'))
    const [userRole, setUserRole] = useState(myStorage.getItem('userRole'))
    return (    
        <Routes>
            <Route path='/' element={
                <Login 
                    myStorage={myStorage}
                    setCurrentUser={setCurrentUser}
                    setUserRole={setUserRole}
                />} 
            />
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='/user' element={
                <UserPage />} 
            />
            <Route path='/admin' element={
                <AdminDashboard />} 
            />
            <Route path='/create' element={<CreateEvent />} />
            <Route path='/search' element={<ResultPage />} />
            <Route path='/detail' element={<DetailEvent />} />
        </Routes>
    )
}
export default Router