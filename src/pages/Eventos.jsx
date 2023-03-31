import React from 'react'

import Evento from '../components/Evento'

import SeteDiasFoto1 from '../images/SeteDias/7diasFoto1.webp'
import SeteDiasFoto2 from '../images/SeteDias/7diasFoto2.webp'
import SeteDiasFoto3 from '../images/SeteDias/7diasFoto3.webp'
import SeteDiasFoto4 from '../images/SeteDias/7diasFoto4.webp'
import SeteDiasFoto5 from '../images/SeteDias/7diasFoto5.webp'
import SeteDiasFoto6 from '../images/SeteDias/7diasFoto6.webp'
import SeteDiasFoto7 from '../images/SeteDias/7diasFoto7.webp'
import SeteDiasFoto8 from '../images/SeteDias/7diasFoto8.webp'

import oDestinoFoto1 from '../images/oDestino/oDestinoFoto1.webp'
import oDestinoFoto2 from '../images/oDestino/oDestinoFoto2.webp'
import oDestinoFoto3 from '../images/oDestino/oDestinoFoto3.webp'
import oDestinoFoto4 from '../images/oDestino/oDestinoFoto4.webp'
import oDestinoFoto5 from '../images/oDestino/oDestinoFoto5.webp'
import oDestinoFoto6 from '../images/oDestino/oDestinoFoto6.webp'
import oDestinoFoto7 from '../images/oDestino/oDestinoFoto7.webp'
import oDestinoFoto8 from '../images/oDestino/oDestinoFoto8.webp'
import oDestinoFoto9 from '../images/oDestino/oDestinoFoto9.webp'
import oDestinoFoto10 from '../images/oDestino/oDestinoFoto10.webp'
import oDestinoFoto11 from '../images/oDestino/oDestinoFoto11.webp'
import oDestinoFoto12 from '../images/oDestino/oDestinoFoto12.webp'
import oDestinoFoto13 from '../images/oDestino/oDestinoFoto13.webp'
import oDestinoFoto14 from '../images/oDestino/oDestinoFoto14.webp'
import oDestinoFoto15 from '../images/oDestino/oDestinoFoto15.webp'
import oDestinoFoto16 from '../images/oDestino/oDestinoFoto16.webp'

import OdioFoto1 from '../images/Odio/OdioFoto1.webp'
import OdioFoto2 from '../images/Odio/OdioFoto2.webp'
import OdioFoto3 from '../images/Odio/OdioFoto3.webp'
import OdioFoto4 from '../images/Odio/OdioFoto4.webp'
import OdioFoto5 from '../images/Odio/OdioFoto5.webp'
import OdioFoto6 from '../images/Odio/OdioFoto6.webp'
import OdioFoto7 from '../images/Odio/OdioFoto7.webp'
import OdioFoto8 from '../images/Odio/OdioFoto8.webp'
import OdioFoto9 from '../images/Odio/OdioFoto9.webp'
import OdioFoto10 from '../images/Odio/OdioFoto10.webp'
import OdioFoto11 from '../images/Odio/OdioFoto11.webp'
import OdioFoto13 from '../images/Odio/OdioFoto13.webp'
import OdioFoto14 from '../images/Odio/OdioFoto14.webp'
import OdioFoto15 from '../images/Odio/OdioFoto15.webp'
import OdioFoto16 from '../images/Odio/OdioFoto16.webp'

import NicaFoto1 from '../images/NicaJoaninha/NicaFoto1.webp'
import NicaFoto2 from '../images/NicaJoaninha/NicaFoto2.webp'
import NicaFoto3 from '../images/NicaJoaninha/NicaFoto3.webp'
import NicaFoto4 from '../images/NicaJoaninha/NicaFoto4.webp'
import NicaFoto5 from '../images/NicaJoaninha/NicaFoto5.webp'
import NicaFoto6 from '../images/NicaJoaninha/NicaFoto6.webp'













function Eventos() {
    return (
        <div className='eventos' id='eventos'>
            <h1>EVENTOS <hr /></h1>

            <div>
                <div className="eventosContainer">

                    <Evento eventDay="12" eventYear="2014" eventMonth="Jul"
                        eventTitle="Lançamento do Livro O Destino Assim o Quis" eventPlace="Vila Real" eventText=""
                        eventFotos={[oDestinoFoto1, oDestinoFoto2, oDestinoFoto3, oDestinoFoto4, oDestinoFoto5,
                            oDestinoFoto6, oDestinoFoto7, oDestinoFoto8, oDestinoFoto9, oDestinoFoto10, oDestinoFoto11, oDestinoFoto12,
                            oDestinoFoto13, oDestinoFoto14, oDestinoFoto15, oDestinoFoto16]} />

                    <Evento eventDay="19" eventYear="2015" eventMonth="Jun"
                        eventTitle="Lançamento do Livro Sete Dias Sete Contos" eventPlace="Vila Real" eventText=""
                        eventFotos={[SeteDiasFoto1, SeteDiasFoto2, SeteDiasFoto3, SeteDiasFoto4, SeteDiasFoto5,
                            SeteDiasFoto6, SeteDiasFoto7, SeteDiasFoto8]} />

                    <Evento eventDay="19" eventYear="2016" eventMonth="Nov"
                        eventTitle="Lançamento do Livro Nicajoaninha" eventPlace="Vila Real" eventText=""
                        eventFotos={[NicaFoto1, NicaFoto2, NicaFoto3, NicaFoto4, NicaFoto5, NicaFoto6]} />

                    <Evento eventDay="18" eventYear="2018" eventMonth="Dez"
                        eventTitle="Lançamento do Livro Ódio de Morte" eventPlace="Vila Real" eventText=""
                        eventFotos={[OdioFoto1, OdioFoto2, OdioFoto3, OdioFoto4, OdioFoto5, OdioFoto6, OdioFoto7, OdioFoto8,
                            OdioFoto9, OdioFoto10, OdioFoto11, OdioFoto13, OdioFoto14, OdioFoto15, OdioFoto16]}
                    />




                </div>
            </div>
        </div>
    )
}

export default Eventos