 import React from 'react'
 import '../stylesheets/Tarea.css'
 import { AiFillCloseCircle } from 'react-icons/ai'


 function Tarea ( { id, texto, completada, completarTarea, eliminarTarea } ) {
   return(
    <div className={completada ? 'tareacontenedor completada' : 'tareacontenedor'}>
        <div 
          className='tareatexto'
          onClick={() => completarTarea(id)}>
          
          {texto}

        </div>
        <div 
            className='tareacontenedoricono'
            onClick={() => eliminarTarea(id)}>
              
          <AiFillCloseCircle className='tareaicono'/>

        </div>
    </div>
   )
 }

 export default Tarea