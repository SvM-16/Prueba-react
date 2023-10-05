import { useEffect, useState } from 'react';
import Titulo from '../Components/Popular'
import json from '../data/sample.json'

function SeriesPages() {
  const [serie, setSeries] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarSeries, setSeleccionarSeries] = useState(null);
  const [loading , setLoading]=useState(true);
  const [error ,setError] = useState(null);

  useEffect(() => {

    try {
      const entrada = json.entries;

      const filtrarSeries = entrada.filter((entry)=>{
        return entry.programType =="series" && entry.releaseYear >=2010
      })
  
      const alfabetico = filtrarSeries.sort((a,b)=>{
        return a.title.localeCompare(b.title);
       })

       setTimeout(()=>{
        setSeries(alfabetico);
        setLoading(false);
      },2000)

    } catch (error) {
      setError(error.message);
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccionarSeries(entry);
    setModalAbrir(true); 
  }

  const cerrarModal = () =>{
    setModalAbrir(null); 
  }

  return (
    <div>
      <Titulo titulo="Lo mas Popular en Series"/>
      {
    error ?(
      <div className="error mensaje">Oops , something went  wrog</div>
    ):  
    loading ? ( 
      <div className="loading-indicator mensaje">Loading...</div>
    ) : (
      <>
      <div className="cards">
        {serie.map((entry) => (
          <div  onClick={() => clickCard(entry)} className='card' key={entry.title}>
              <img className='img' src={entry.images["Poster Art"].url} alt="" />
              <p className='p'>{entry.title}</p>
          </div>
         
        ))}
      </div>
      {modalAbrir && seleccionarSeries && (
        <div className="modal">
          <h2 className='modal1'>{seleccionarSeries.title}</h2>
          <p className='modal2'>{seleccionarSeries.description}</p>
          <p className='modal2'>{seleccionarSeries.releaseYear}</p>
          <img className='img1' src={seleccionarSeries.images["Poster Art"].url} alt="" />
          <button className='butoon' onClick={() => cerrarModal()}>Salir</button>
        </div>
      )}
      </>
    )}
    </div>
  );
}

export default SeriesPages