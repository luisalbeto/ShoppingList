import React from 'react'
import logoapp from '../images/logoapp.png'
import '../stylesheets/ContenedorLogo.css'

function ContenedorLogo(props) {

  return(
    <div className='contenedorlogo'>
      <img 
        className='logoapp'
        src={logoapp}
        alt='logoapp' />
    </div>
      
        )
}

export default ContenedorLogo