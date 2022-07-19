import React from 'react'
import './navbar.css'
const navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-title'>After Dark</div>
            <div className='navbar-center'>
                <a className='navbar-link' href="www.google.com">Create event</a>
                <a className='navbar-link' href="www.google.com">Create event</a>
            </div>
            <div className='navbar-right'>
                <div>Welcome admin!</div>
                <button className='logout-btn'>Logout</button>
            </div>
        </div>
    )
}
export default navbar