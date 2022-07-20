import React, { useState, useEffect } from 'react'
import './userPage.css'
import Event from '../../components/event'
import Navbar from '../../components/navbar'
import axios from 'axios'

const UserPage = ({currentName}) => { 
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('api/events')
            setEvents(res.data)
        }
        fetchEvents()
    }, [events])
    return (
        <div className='user-page'>
            <Navbar
                currentName={currentName}
                isAdmin={0}
            />
            <div className='events'>
                {events.map((e) => (
                    <Event key={e._id} event={e} />
                ))}
            </div>
        </div>
    )
}
export default UserPage