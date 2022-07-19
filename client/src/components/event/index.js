import React from 'react'
import './event.css'

const Event = ({event}) => {
    const PF = 'http://localhost:3080/images/'
    return (
        <div className='event'>
            <p>{event.date} {event.time}</p>
            <img src={PF + event.img} alt="error when loading"></img>
            <h2>At {event.location}</h2>
            <h1>{event.title}</h1>
        </div>
    )
}
export default Event