import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const myStorage = window.localStorage
    const userName = myStorage.getItem('userName')
    const userRole = myStorage.getItem('userRole')
    const handleLogout = () => {
        window.location.replace('/')
        myStorage.removeItem('userName')
        myStorage.removeItem('userRole')
    }
    return (
        <div className='navbar'>
            <div className='navbar-title'>
                {userRole === 'Admin' ? (<Link to='/admin'>After Dark</Link>) : (<Link to='/user'>After Dark</Link>)}
            </div>
            {/* <div className='navbar-center'>
                <a className='navbar-link' href="www.google.com">Create event</a>
                <a className='navbar-link' href="www.google.com">Create event</a>
            </div> */}
            <div className='navbar-right'>
                {userRole === 'Admin' ? (<div>Welcome {userName}</div>) : (<div>Hi {userName}</div>)}
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar