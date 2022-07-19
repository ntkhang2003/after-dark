import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import Event from "../../components/event"
import axios from "axios"
import './adminDashboard.css'
const AdminDashboard = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("/api/events")
            setEvents(res.data)
        }
        fetchEvents()
    }, [])
    return (
        <div>
            <Navbar />
            <input className='searchbar' placeholder='Search...'/>
            <div className='eventsList'>
                {(events).map((e) => (
                    <Event key={e._id} event={e}/>
                ))}
            </div>
        </div>
    )
}
export default AdminDashboard