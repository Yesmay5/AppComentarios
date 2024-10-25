import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomeconLink = () => {
  return (
    <div className='home-link'>
        <Link to='/'>
            <FaHome color='red' size={30} />
        </Link>
    </div>
  )
}

export default HomeconLink