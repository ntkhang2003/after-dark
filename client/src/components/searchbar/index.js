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
                    placeholder='search'
                    onChange={e => setQ(e.target.value)}
                ></input>
                <button tpye='submit' onClick={()=>navigate(`/search?q=${q}`)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar