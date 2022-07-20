import React, { useState, useEffect } from 'react'
import Event from '../../components/event'
import Navbar from '../../components/navbar'
import './adminDashboard.css'
import axios from 'axios'
import './adminDashboard.css'

const AdminDashboard = ({currentName}) => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('api/events')
            setEvents(res.data)
        }
        fetchEvents()
    }, [events])
    return (
       <div className='admin-page'>
            <Navbar
                currentName={currentName}
                isAdmin={1}
            />
            <input className='searchbar' placeholder='Search...'/>
            <div className='eventsList'>
                {events.map((e) => (
                    <Event key={e._id} event={e}/>
                ))}
            </div>
        </div>
    )
}
export default AdminDashboard