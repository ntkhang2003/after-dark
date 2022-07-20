import React from 'react'
import './navbar.css'

const Navbar = ({currentName, isAdmin}) => {
    const handleLogout = () => {
        window.location.replace('/')
    }
    return (
        <div className='navbar'>
            <div className='navbar-title'>After Dark</div>
            {isAdmin?
                <div className='navbar-center'>
                    <a className='navbar-link' href={isAdmin? "/admin":"/user"}>Home</a>
                    <a className='navbar-link' href="/create">Create event</a>
                </div>
            :null}
            <div className='navbar-right'>
                <div>Welcome {currentName}</div>
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Navbar