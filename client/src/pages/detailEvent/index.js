import React from 'react'
import './detailEvent.css'
import Navbar from '../../components/navbar'

const DetailEvent = () => {
    // const PF = 'http://localhost:3080/images/'
    return (
        <div>
            <Navbar />
            <div className='detail-event'>
                <div className="detail-card">
                    <div className='detail-left'>
                        <div className='detail-title'>event title</div>
                        <p className='detail-props'>
                            Date: event date <br/>
                            Time: event time <br/>
                            Location: event location <br/>
                        </p>
                        <button className="register-btn">Register</button>
                    </div>
                    <img className='detail-img' src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Xuan_Huong_Lake_11.jpg"/>
                </div>
            </div>
        </div>
    )
}
export default DetailEvent