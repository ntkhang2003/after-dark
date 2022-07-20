import React from 'react'
import './event.css'
const Event = ({event}) => {
    const PF = 'http://localhost:3080/images/'
    return (
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
        </div>
    )
}
export default Event