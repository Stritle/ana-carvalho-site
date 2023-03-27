import React from 'react'
import { Link } from 'react-router-dom'


function Evento({ eventDay, eventMonth, eventYear, eventTitle, eventPlace, eventFotos }) {
    let eventInfo = {};
    return (
        <div className='eventoContainer'>
            <div className='eventoContent'>
                <div>
                    <h2>{eventDay}</h2>
                    <div>
                        <small>{eventMonth}</small>
                        <small>{eventYear}</small>
                    </div>
                    <h1>{eventTitle}/</h1>
                    <h6>{eventPlace}</h6>
                </div>
                <div className='eventBtn'>
                    <Link state={eventInfo = { eventTitle, eventDay, eventMonth, eventYear, eventPlace, eventFotos }} to="/evento">Ver  Evento</Link>
                </div>
            </div>
        </div>
    )
}

export default Evento