import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './searchbar.css'

const SearchBar = () => {
    const navigate = useNavigate()
    const [q, setQ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${q}`)
    }
    return (
        <div className='search-bar'>
            <form className='search-form' on onSubmit={handleSubmit}>
                <input
                    className='search-input'
                    placeholder='Search...'
                    onChange={e => setQ(e.target.value)}
                />
                <button className='search-btn' type='submit' onClick={()=>navigate(`/search?q=${q}`)}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar