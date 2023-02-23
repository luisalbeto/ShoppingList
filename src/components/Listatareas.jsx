import React, {useState} from 'react'
import Agregartarea from './Agregartarea'
import '../stylesheets/Listatareas.css'
import Tarea from './Tarea'

function Listatareas() {
  
  const[tareas , setTareas] = useState([])

  const añadirtarea = tarea => {
    

    
    if (tarea.texto.trim()) { 
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [ tarea , ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id ){
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }
  
  return(

  <>
    <Agregartarea
      onSubmit={añadirtarea} />
    <div className='listatareas'>
      {
        tareas.map((tarea) => 
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}/>
        )
      }

    </div>
  </>
  )
}

export default Listatareas