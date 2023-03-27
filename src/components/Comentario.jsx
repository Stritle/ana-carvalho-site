import React from 'react'
import ReadMoreBtn from './ReadMoreBtn'

function Comentario({ nameComent, sourceComent, textComent }) {
    return (
        <div className='comentarioContent'>
            <div className='aspas'></div>
            <ReadMoreBtn textComent={textComent} limit={150} />
            <div className='underLine'></div>
            <h5><b>{nameComent},</b><p>{sourceComent}</p></h5>

        </div>
    )
}

export default Comentario