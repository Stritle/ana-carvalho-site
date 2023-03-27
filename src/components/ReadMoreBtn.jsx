import React, { useState } from 'react'

function ReadMoreBtn({ textComent, limit }) {

    setTimeout(() => {
        console.log("Delayed for 1 second.");
    }, "10000");

    const [isReadMoreShown, setIsReadMoreShown] = useState(false);

    const toggleBtn = () => {
        setIsReadMoreShown(isReadMoreShown => !isReadMoreShown)
        setTimeout(() => {
            setIsReadMoreShown(isReadMoreShown => !isReadMoreShown)
        }, "15000");
    }

    return (
        <div className='readMore'>
            <p>{textComent.length < limit ? textComent : isReadMoreShown ? textComent : textComent.substr(0, limit) + `...`}
            </p>
            {textComent.length < limit ? <div></div> : (<button onClick={toggleBtn}>VER MAIS</button>)}

        </div>
    )
}

export default ReadMoreBtn