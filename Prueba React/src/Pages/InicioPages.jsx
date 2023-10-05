import '../Css/Inicio.css'
import Cine from '../assets/placeholder.png'
import { Link } from 'react-router-dom';
import Titulo from '../Components/Popular'

function InicioPages() {
  return (
    <div>
      <Titulo titulo="Series y Peliculas"/>
      <div className='Peli-Series'>
        <div className='cuadro1'>
          <Link to="/Peliculas" className="peliculas">
            <img src={Cine} className='cine' />
            <h1 className='peli'>Peliculas</h1>
          </Link>
        </div>
        <div className="cuadro2">
          <Link to="/Series" className="series">
            <img src={Cine} className='cine' />
            <h1 className='serie'>Series</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InicioPages;