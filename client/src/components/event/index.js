import React from 'react'
import './event.css'
import axios from 'axios'

const Event = ({event}) => {
    const myStorage = window.localStorage
    const userRole = myStorage.getItem('userRole')
    const PF = 'http://localhost:3080/images/'
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/events/${event._id}`)
        } catch (err) {}
    }
    return (
        <div className='event-wrapper'>
            <div className='event-card'>
                <div className='event-card-top'>
                    <img className='event-img' src={PF + event.img} alt="error when loading"/>
                    <div className='event-title'>{event.title}</div>
                </div>
                <div className='event-card-bottom'>
                    <div className='event-date'>{event.date}</div>
                    <div className='event-attributes'>
                        <div className='event-time'>{event.time}</div>
                        <div className='event-dest'>at {event.location}</div>
                    </div>
                </div>
                {userRole === 'Admin' && <i className='event-delete fa-solid fa-circle-minus' onClick={handleDelete}></i>}
            </div>
        </div>  
    )
}

export default Event    