import '../Css/Peliculas.css'
import { useEffect, useState } from 'react';
import Titulo from '../Components/Popular'
import json from '../data/sample.json'

function PeliculasPages() {
  const [movies, setMovies] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarMovies, setSeleccionarMovies] = useState(null);
  const [loading , setLoading]=useState(true);
  const [error ,setError] = useState(null);

  useEffect(() => {

    try {
      const entrada = json.entries;

      const filtrarMovies = entrada.filter((entry)=>{
        return entry.programType =="movie" && entry.releaseYear >=2010
      })
  
      const alfabetico = filtrarMovies.sort((a,b)=>{
        return a.title.localeCompare(b.title);
       })

       setTimeout(()=>{
        setMovies(alfabetico);
        setLoading(false);
      },2000)

    } catch (error) {
      setError(error.message);
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccionarMovies(entry);
    setModalAbrir(true); 
  }

  const cerrarModal = () =>{
    setModalAbrir(null); 
  }


  return (
    <div>
      <Titulo titulo="Lo mas Popular en Peculas" />
      {
    error ?(
      <div className="error mensaje">Oops , something went  wrog</div>
    ):  
    loading ? ( 
      <div className="loading-indicator mensaje">Loading...</div>
    ) : (
      <>
      <div className="cards">
        {movies.map((entry) => (
          <div  onClick={() => clickCard(entry)} className='card' key={entry.title}>
              <img className='img' src={entry.images["Poster Art"].url} alt="" />
              <p className='p'>{entry.title}</p>
          </div>
         
        ))}
      </div>
      {modalAbrir && seleccionarMovies && (
        <div className="modal">
          <h2 className='modal1'>{seleccionarMovies.title}</h2>
          <p className='modal2'>{seleccionarMovies.description}</p>
          <p className='modal2'>{seleccionarMovies.releaseYear}</p>
          <img className='img1' src={seleccionarMovies.images["Poster Art"].url} alt="" />
          <button className='butoon' onClick={() => cerrarModal()}>Salir</button>
        </div>
      )}
      </>
    )}
    </div>
  );
}

export default PeliculasPages