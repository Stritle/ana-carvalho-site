import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Main() {
    return (
        <div className='main' id='main'>

            <div className='main-left'>
                <div className='aspas-main'></div>
                <h1> Ana descobriu cedo o gosto pela escrita, mas os seus medos impediram-na de arriscar. Em 2013  finalmente ganhou coragem e, em 2014 surgiu a sua primeira obra. A partir daí,  restava continuar, não fosse ela uma sonhadora.

                </h1>
                <h1 className='textHidden'> Para ela, escrever é libertar os sonhos que vivem em si.</h1>
                <div>
                    <Link smooth="true" to="#contacto">CONTACTE-ME</Link>
                    <Link smooth="true" to="#livros">VER LIVROS</Link>
                </div>


            </div>
            <div className='main-right'></div>
        </div>

    )
}

export default Main