import React, { useState } from 'react'
import FacebookLogo from "../images/facebook.webp"
import InstagramLogo from "../images/insta.webp"
import EmailLogo from "../images/email.webp"
import WhatsappLogo from "../images/whatsapp.webp"

function Contacto() {

    const [styleEmail, setStyleEmail] = useState({ visibility: "hidden" })
    const [styleTelefone, setStyleTelefone] = useState({ visibility: "hidden" })
    const [visibilityEmail, setVisibilityEmail] = useState(false)
    const [visibilityTelefone, setVisibilityTelefone] = useState(false)




    const emailTogglerHandler = () => {
        if (visibilityEmail) {
            setStyleEmail({ visibility: "hidden" })
            setVisibilityEmail(!visibilityEmail)

        }
        else {
            setStyleEmail({ visibility: "initial" })
            setVisibilityEmail(!visibilityEmail)
            setTimeout(() => {
                setStyleEmail({ visibility: "hidden" })
            }, "6000");
        }

    }

    const telefoneTogglerHandler = () => {
        if (visibilityTelefone) {
            setStyleTelefone({ visibility: "hidden" })
            setVisibilityTelefone(!visibilityTelefone)

        }
        else {
            setStyleTelefone({ visibility: "initial" })
            setVisibilityTelefone(!visibilityTelefone)
            setTimeout(() => {
                setStyleTelefone({ visibility: "hidden" })
            }, "6000");
        }

    }

    return (
        <div className='contacto' id='contacto'>
            <h1>CONTACTOS</h1>
            <hr />
            <div className="contactoContainer" >

                <a href="https://www.facebook.com/anadecarvalho1402"><img src={FacebookLogo}></img></a>
                <a href="https://www.instagram.com/carvalho1327/"><img src={InstagramLogo}></img></a>
                <a onClick={emailTogglerHandler} href="#contacto"><img src={EmailLogo}></img></a>
                <a onClick={telefoneTogglerHandler} href="#contacto"><img src={WhatsappLogo}></img></a>

            </div>
            <div className='btnContactos' style={styleEmail}>
                Email: anacarvalho.vr@gmail.com
            </div>
            <div className='btnContactos' style={styleTelefone}>
                Telefone:+351 963 160 423
            </div>
        </div>
    )
}

export default Contacto