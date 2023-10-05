import {BrowserRouter, useRoutes} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar'
import InicioPages from '../src/Pages/InicioPages'
import PeliculasPages from './Pages/PeliculasPages'
import SeriesPages from './Pages/SeriesPages'
import Footer from './Components/Footer'

function Router() {
  let router = useRoutes([
    {path: '/', element:<InicioPages/>},
    {path: '/Peliculas', element:<PeliculasPages/>},
    {path: '/Series', element:<SeriesPages/>},
  ])
 return router
}


function App() {
  return(
    <div>
    <BrowserRouter>
    <Navbar/>
      <Router>
      </Router>
    <Footer/>
    </BrowserRouter>
  </div>
  )
}


export default App
