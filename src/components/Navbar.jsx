import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import anaLogo from '../images/anaLogo.png'

function Navbar() {
    return (
        <div className='header'>
            <div className='logo'><img src={anaLogo}></img></div>
            <div className='navbar'>
                <ul>
                    <li><Link smooth="true" to="#">Inicio</Link></li>
                    <li><Link smooth="true" to="#livros"> Livros</Link></li>
                    <li><Link smooth="true" to="#naMidia">Mídia</Link></li>
                    <li><Link smooth="true" to="#sobre">Sobre</Link></li>
                    <li><Link smooth="true" to="#eventos">Eventos</Link></li>
                    <li><Link smooth="true" to="#contacto">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar