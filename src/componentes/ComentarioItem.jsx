import {React, useState, useContext} from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'
import ComentariosContexto from '../contexto/ComentariosContexto'

const ComentarioItem = ({comentario}) => {


    const [comment, setComment ] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [identificacion, setIdentificacion] = useState(comentario.id)

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>{comment}</div>
    </Card>
  )
}

export default ComentarioItem