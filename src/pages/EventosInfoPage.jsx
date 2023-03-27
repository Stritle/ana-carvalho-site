import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function EventosInfoPage() {
    const location = useLocation()
    const { eventTitle, eventDay, eventMonth, eventYear, eventPlace, eventFotos } = location.state

    const listaDeFotos = eventFotos.map((fotoUrl, index) => (
        <div className='eventFotos'
            key={index}
            style={{
                backgroundImage: `url(${fotoUrl})`,
                backgroundSize: "cover",

            }}
        />
    ));

    return (
        <div className='evetosInfoPage'>
            <h1>{eventTitle} em {eventPlace} no dia {eventDay} de {eventMonth} de {eventYear} </h1>
            <div className='imgContainer'>{listaDeFotos}
            </div>
            <Link to="/">VOLTAR</Link>
        </div>
    )
}

export default EventosInfoPage