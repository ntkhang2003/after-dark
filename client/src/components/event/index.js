import React from 'react'
import './event.css'
const event = ({event}) => {
    return (
        <div className='event-card'>
            <div className='event-card-top'>
                <img className='event-img' src={event.img}/>
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
export default event