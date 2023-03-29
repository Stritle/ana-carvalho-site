import React from 'react'
import Livro from '../components/Livro'
import NicaJoaninha from '../images/Nicajoaninha.webp'
import DestinoAssimQuis from '../images/DestinoAssimQuis.webp'
import SeteDias from '../images/SeteDias.webp'
import OdioMorte from '../images/OdioMorte.webp'

function Livros() {
    return (
        <div className='livros' id='livros'>
            <h1>Livros Lançados</h1>
            <div className='livros-container'>
                <Livro source={NicaJoaninha} title="Nicajoaninha" linkCompra="https://www.wook.pt/livro/nicajoaninha-ana-de-carvalho/19041423" />
                <Livro source={DestinoAssimQuis} title="O Destino Assim o Quis" linkCompra="https://www.wook.pt/livro/o-destino-assim-o-quis-ana-de-carvalho/15869574" />
                <Livro source={OdioMorte} title="Odio de Morte" linkCompra="https://www.wook.pt/livro/odio-de-morte-ana-de-carvalho/22801296" />
                <Livro source={SeteDias} title="Sete Dias Sete Contos" linkCompra="https://www.wook.pt/livro/sete-dias-sete-contos-ana-de-carvalho/16591119" />

            </div>
        </div>
    )
}

export default Livros