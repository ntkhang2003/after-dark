import React, { useState, useEffect } from 'react'
import Event from '../../components/event'
import SearchBar from '../../components/searchbar'
import NavBar from '../../components/navbar'
import './adminDashboard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('api/events')
            setEvents(res.data)
        }
        fetchEvents()
    }, [events])
    return (
        <div className='admin-dashboard'>
            <NavBar />
            <Link to='/create'>Create new event</Link>
            <SearchBar />
            <div className='events'>
                {events.map((e) => (
                    <Event key={e._id} event={e} />
                ))}
            </div>
        </div>
    )
}
export default AdminDashboard