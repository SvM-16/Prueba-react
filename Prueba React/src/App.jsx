import {BrowserRouter, useRoutes} from 'react-router-dom'
import './App.css'

import NavbarPeges from './Pages/NavbarPeges'
import InicioPages from '../src/Pages/InicioPages'
import PeliculasPages from './Pages/PeliculasPages'
import SeriesPages from './Pages/SeriesPages'
import FooterPages from './Pages/FooterPages'

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
    <NavbarPeges/>
      <Router>
      </Router>
    <FooterPages/>
    </BrowserRouter>
  </div>
  )
}


export default App
