import React from 'react'

function Livro({ source, title, linkCompra }) {
    return (
        <div className='livroComponent'>
            <img src={source}></img>
            <h1>{title}</h1>
            <a href={linkCompra}>COMPRAR</a>
        </div>
    )
}

export default Livro