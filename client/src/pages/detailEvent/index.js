import React, { useEffect, useState } from 'react'
import './detailEvent.css'
import Navbar from '../../components/navbar'
import axios from 'axios'

const DetailEvent = () => {
    const PF = 'http://localhost:3080/images/'
    const myStorage = window.localStorage
    const eventId = myStorage.getItem('eventId')
    const [event, setEvent] = useState([])
    useEffect(() => {
        const fetchEvent = async () => {
            const res = await axios.get(`/api/events/${eventId}`)
            setEvent(res.data)
        }
        fetchEvent()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='detail-event'>
                <div className="detail-card">
                    <div className='detail-left'>
                        <div className='detail-title'>{event.title}</div>
                        <p className='detail-props'>
                            Date: {event.date} <br/>
                            Time: {event.time} <br/>
                            Location: {event.location} <br/>
                        </p>
                        <button className="register-btn">Register</button>
                    </div>
                    <img className='detail-img' src={PF + event.img} alt='error when loading'/>
                </div>
            </div>
        </div>
    )
}
export default DetailEvent