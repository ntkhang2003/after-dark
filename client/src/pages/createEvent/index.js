import React, { useState } from 'react'
import './createEvent.css'
import Navbar from '../../components/navbar'
import axios from 'axios'

const CreateEvent = () => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [file, setFile] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newEvent = {
            title,
            date,
            time,
            location,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append('file', file)
            newEvent.img = filename
            try {
                await axios.post('/api/upload', data)
            } catch (err) {}
        }
        try {
            await axios.post('/api/events', newEvent)
            window.location.replace('/admin')
        } catch (err) {}
    }
    return (
        <div>
            <Navbar />
            <div className='create-event'>
                    <form className='form-event' onSubmit={handleSubmit}>
                        <h1 className="page-title">Create an event</h1>
                        <div className='form-group'>
                            <label className='label-title'>Event title</label>
                            <input 
                                className='form-title' 
                                type="text"  
                                onChange={e => setTitle(e.target.value)}
                                autoFocus={true}
                            ></input>
                            <label className='label-date'>Event date</label>
                            <input
                                className='form-date' 
                                type="text" 
                                onChange={e => setDate(e.target.value)}
                                autoFocus={true}
                            ></input>
                            <label className='label-time'>Event time</label>
                            <input
                                className='form-time' 
                                type="text" 
                                onChange={e => setTime(e.target.value)}
                                autoFocus={true}
                            ></input>
                            <label className='label-location'>Event location</label>
                            <input
                                className='form-location' 
                                type="text" 
                                onChange={e => setLocation(e.target.value)}
                                autoFocus={true}
                            ></input>
                        </div>
                        <label className='label-img'>Event image</label>
                        <input type='file' onChange={e => setFile(e.target.files[0])}></input>
                        <button className='form-btn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}
export default CreateEvent