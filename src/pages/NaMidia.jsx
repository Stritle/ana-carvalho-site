import React from 'react'
import Comentario from '../components/Comentario'

function NaMidia() {
    return (
        <div className='naMidia' id='naMidia'>
            <h1>Comentários</h1>
            <div className="naMidiaContainer">
                <Comentario textComent=" A obra Ódio de Morte é fascinante onde o amor e o ódio se cruzam.
                "
                    nameComent="MARIA PROSA"
                    sourceComent="ARTISTA PLÁSTICA" />

                <Comentario textComent="Sete dias - sete contos é um livro indispensável em qualquer casa com crianças. Sendo um livro, são muitos. Sendo muitas histórias, são ainda mais, porque cada uma delas vai polvilhar os sonhos dos mais pequeninos com amizade e ternura. Uma história por cada dia da semana. Inprescindível!"
                    nameComent="Tânia Ribas de Oliveira"
                    sourceComent="Apresentadora da RTP" />

                <Comentario textComent="A praia de Ana Carvalho é o quotidiano, as conversas entre quatro paredes, o imprevisível, os segredos familiares e os equívocos. São histórias dentro de uma história e de uma vida aparentemente banal. Há um casamento fracassado que afinal não o é, há decepção e abuso, que não se vê à superfície por retinas viciadas e uma análise das ambiguidades humanas que revelam as fraquezas nossas de cada dia. A mesma pessoa tem diante de si o infinito e o chão e é nessa escolha que se define.
                Em síntese, este é um livro para ser lido por qualquer pessoa que goste de histórias tão reais que pareçam inventadas."
                    nameComent="Helena Ferro Gouveia"
                    sourceComent="Comentadora CNN" />
            </div>
        </div>
    )
}

export default NaMidia