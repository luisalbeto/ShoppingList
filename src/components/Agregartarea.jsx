import React, { useState } from 'react'
import '../stylesheets/Agregartarea.css'
import  { v4 as uuidv4} from 'uuid'

function Agregartarea(props) {

 const [ input , setInput] = useState('')



 const manejarCambio = e => {
  setInput(e.target.value)
 }


 const manejarEnvio = e => {
  
  e.preventDefault()
 
  const tareaNueva = {
    id: uuidv4(),
    texto: input,
    completada: false
                    }

  props.onSubmit(tareaNueva)

                            }
  
    return(
    
   

      <form 
        className='agregartareacontenedor'
        onSubmit={manejarEnvio}>
    



          <input
            className='agregartarea'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
        
      />

        <button className='botonagregartarea'>
          Agregrar Tarea 
        </button>

      </form>

        )
    } 

export default Agregartarea