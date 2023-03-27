import React from 'react'
import fotoAna from "../images/Ana.webp"

function Sobre() {
    return (
        <div className='sobre' id="sobre"><h1>BIOGRAFIA</h1>
            <div className='biografiaContainer'>
                <img src={fotoAna}></img>
                <div className='biografiaContent'>
                    <p>Ana Maria Fernandes de Carvalho, é escritora e funcionária da Ordem dos Contabilistas Certificados desde 2007.
                        Trabalhou como colaboradora no Jornal de Noticias de Vila Real, onde escreveu várias entrevistas, e divulgou imensos trabalhos.
                        Também escreveu alguns artigos para a revista Raízes.
                        Já participou numa peça de teatro amador e mais recentemente, participou num filme intitulado “Quem matou Laura Paula”, com estreia marcada nos cinemas, já no início de março de 2023.
                        Foi convidada e participou por duas vezes com poemas da sua autoria na Antologia de Poesia Contemporânea “Entre o Sono e o Sonho” da Chiado Editora.
                        O seu lema de vida é: “Viva e deixe viver”
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Sobre