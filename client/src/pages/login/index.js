import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

const Login = ({myStorage}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault()
        const loginUser = {
            username,
            password,
            role,
            name
        }
        try {
            await axios
            .post('/api/users', loginUser)
            .then(function (res) {
                myStorage.setItem('currentName', res.data.name)
                if (res.data.role === "Admin") {
                    window.location.replace('/admin')
                } else {
                    window.location.replace('/user')
                }
            })
        } catch (err) {
            setError(true) 
        }
    }
    return (
        <div className='view'>
            <div className='login-container'>
                <h1 className="login-title">After Dark</h1>
                <form className="login-form" onSubmit={handleLogin}> 
                    <label className='label-username'>Username</label>
                    <input className="input-username" type="text" onChange={e => setUsername(e.target.value)}/>
                    <label className='label-password'>Password</label>
                    <input className="input-password" type="text" onChange={e => setPassword(e.target.value)}/>
                    {error && <div className='error-msg'>Wrong username or password</div>}
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login