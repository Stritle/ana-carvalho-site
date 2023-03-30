import React from 'react'
import FacebookLogo from "../images/facebook.webp"
import InstagramLogo from "../images/insta.webp"
import EmailLogo from "../images/email.webp"
import WhatsappLogo from "../images/whatsapp.webp"

function Contacto() {
    return (
        <div className='contacto' id='contacto'>
            <h1>CONTACTOS</h1>
            <hr
                style={{
                    color: "rgba(141,27,27)",
                    height: 1.2,
                    backgroundColor: "rgba(141,27,27)",
                    width: "8vw",

                }}
            />
            <div className="contactoContainer" >

                <a href="https://www.facebook.com/anadecarvalho1402"><img src={FacebookLogo}></img></a>
                <a href="https://www.instagram.com/carvalho1327/"><img src={InstagramLogo}></img></a>
                <a href="#"><img src={EmailLogo}></img></a>
                <a href="https://wa.me/351919658561"><img src={WhatsappLogo}></img></a>
            </div>
        </div>
    )
}

export default Contacto