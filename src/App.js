import './App.css'
import ContenedorLogo from './components/ContenedorLogo';
//import Tarea from './components/Tarea';
import Listatareas from './components/Listatareas';



function App() {
  return (
    <div className='tareaspendientesapp'>
      <ContenedorLogo/>
      <div className='tareaslistaprincipal'>
        <h1> Compras </h1>
        <Listatareas/>
       
      </div>
      
    </div>
  );
}

export default App;
