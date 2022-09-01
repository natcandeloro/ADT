import React from 'react'
import "../Assets/Css/Footer.css"
import { BiCopyright } from "react-icons/bi"
import fzproducciones from "../Assets/Statics/fzo.png"
import circulo from "../Assets/Statics/fzpcirculo.png"

export default function Footer() {
  return (
    <div className='footer'>
      <p className='pfoot'>AIRE DE TRABAJO Mendoza, Argentina. Desde el 2 de septiembre de 2007.</p> 
      <p>Idea y producción general: Fernando Zárraga.</p>
      <p className='pfoot'>Todos los derechos reservados <BiCopyright/> 2022 AIRE DE TRABAJO  </p>
      <p className='pfoot'><img src={fzproducciones} alt="Logo Fernando Zarraga Producciones" className='fzp'/><img src={circulo} alt="Logo Fernando Zarraga Producciones" className='fzpcirculo'/> </p>
      <a href='https://wa.me/qr/JS4OJURIWXUCG1' className='natpie'><p className='nati'>Powered by: Natalia Candeloro</p></a>
    </div> 
    
  )
}
