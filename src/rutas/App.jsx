import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Contenedores/Home'
import Nosotros from '../Contenedores/Nosotros'
import Generalidades from '../Contenedores/Generalidades'
import Franquicia from '../Contenedores/Franquicia'
import Galeria from '../Contenedores/Galeria'
import Contacto from '../Contenedores/Contacto'
import Layout from '../Componentes/Layout'


export default function App() {
  return  <BrowserRouter>
  <Layout> 
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/nosotros' element={<Nosotros/>}></Route>
        <Route exact path='/generalidades' element={<Generalidades/>}></Route>
        <Route exact path='/franquicia' element={<Franquicia/>}></Route>
        <Route exact path='/galeria' element={<Galeria/>}></Route>
        <Route exact path='/contacto' element={<Contacto/>}></Route>
    </Routes>
    </Layout>
    </BrowserRouter>

}
