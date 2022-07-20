import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import './resultPage.css'
import SearchBar from '../../components/searchbar'
import Event from '../../components/event'
import axios from 'axios'

const ResultPage = () => {
    const [events, setEvents] = useState([])
    const query = useLocation().search
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`api/events/search${query}`)
            setEvents(res.data)
        }
        fetchEvents()
    }, [query])
    return (
        <div className='result-page'>
            <SearchBar />
            <div className='result-events'>
                {events.map((e) => (
                    <Event key={e._id} event={e} />
                ))}
            </div>
        </div>
    )
}

export default ResultPage