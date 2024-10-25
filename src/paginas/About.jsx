import React from 'react'
import Card from '../componentes/Card'
import HomeconLink from '../componentes/HomeconLink'

const About = ({titulo, autor, centro, ficha}) => {
    return (
        <Card>
            <div className='about'>
              <HomeconLink className= "home-link"/>
                <h1>Acerca de este proyecto </h1>
                <h3>Esta es una app en react</h3>
                <p><b>titulo:</b> {titulo}</p>
                <p><b>autor:</b> {autor}</p>
                <p><b>centro:</b> {centro}</p>
                <p><b>ficha:</b> {ficha}</p>
                <p><b>Version: </b> 1.0.0</p>
            </div>
        </Card>
        )
}

export default About