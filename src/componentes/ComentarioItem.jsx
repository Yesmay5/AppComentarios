import {React, useState, useContext} from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'
import ComentariosContexto from '../contexto/ComentariosContexto'

const ComentarioItem = ({comentario}) => {
    
    //desestructurar: tomar un objeto
    //                y separa sus atributos

    const [comment, setComment ] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [identificacion, setIdentificacion] = useState(comentario.id)

  return (
    <Card reverse={true}>
      <div className='num-display'>{rating}</div>
      <button className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>{comment}</div>
    </Card>
  )
}

export default ComentarioItem