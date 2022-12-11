import React from 'react'
import "../Assets/Css/Footer.css"
import { BiCopyright } from "react-icons/bi"
import fzproducciones from "../Assets/Statics/fzo.png"
import circulo from "../Assets/Statics/fzpcirculo.png"
import cande from "../Assets/Statics/cande.png"


export default function Footer() {
  return (
    <div className='footer'>
      <p className='pfoot'>AIRE DE TRABAJO · Mendoza, Argentina · Desde el 2 de septiembre de 2007</p> 
      <p className='pfoot'>Idea y producción general: Fernando Zárraga</p>
      <p className='pfoot'>Todos los derechos reservados <BiCopyright/> 2022 AIRE DE TRABAJO</p>
      <img src={circulo} alt="Logo Fernando Zarraga Producciones" className='fzpcirculo'/><img src={fzproducciones} alt="Logo Fernando Zarraga Producciones" className='fzp'/> <br/>
      <a href='https://wa.me/5492615434358' target="blank" ><p className='nati'>Powered by: <img src={cande}  className="cande" alt=""/></p></a>
    </div> 
    
  )
}
