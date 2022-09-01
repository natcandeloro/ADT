import React from "react";
import "../Assets/Css/Contacto.css"
import facebook from "../Assets/Statics/facebook.png"
import instagram from "../Assets/Statics/instagram.png"
import spotify from "../Assets/Statics/spotify.png"
import youtube from "../Assets/Statics/youtube.png"
import gmail from "../Assets/Statics/gmail.png"
import ivoox from "../Assets/Statics/ivoox.png"
import whatsapp from "../Assets/Statics/whatsapp.png"
import twitter from "../Assets/Statics/twitter.png"





export default function Contacto() {
  return ( 

        <div className="espiritu">
      <div className="d-flex justify-content-center">
        <div className="col contacto">
          <div className=" ">
              <h4>Ofrecemos múltiples vías para contactarse con Aire de Trabajo:</h4>
                <p><img src={whatsapp} alt="Logo de Whatsapp" className='logoi'/> Whatsapp: 261-5091906</p>
                <p><img src={gmail} alt="Logo de Gmail" className='logoi'/> Correo electrónico: airedetrabajo.argentina@gmail.com</p> 
              <h5>Redes sociales:</h5>
                <p><img src={facebook} alt="Logo de Facebook" className='logoi'/><a href='https://www.facebook.com/airedetrabajo.argentina' target="blank">AIRE DE TRABAJO ARGENTINA</a></p>
                <p><img src={twitter} alt="Logo de Twitter" className='logoi'/><a href='https://twitter.com/AireDeTrabajo?t=KalHSv4_xKbXWeIpxzpMDg&s=09' target="blank"> AIRE DE TRABAJO </a></p>
                <p><img src={instagram} alt="Logo de Instagram" className='logoi'/><a href='https://instagram.com/airedetrabajo.argentina?igshid=YmMyMTA2M2Y=' target="blank"> AIRE DE TRABAJO ARGENTINA </a></p>
                <p><img src={spotify} alt="Logo de Spotify" className='logoi'/><a href='https://open.spotify.com/show/3r5JpdVTX4nXXoUVphlTSI?si=XIlw99QOTOiC5Fmd3z7gSA' target="blank"> AIRE DE TRABAJO - Podcast</a></p>
                <p><img src={ivoox} alt="Logo de Ivoox" className='logoi'/><a href='https://podcasters.ivoox.com/#/content#scheduled' target="blank"> AIRE DE TRABAJO - Podcast</a> </p>
                <p><img src={youtube} alt="Logo de Youtube" className='logoi'/><a href='https://youtube.com/channel/UCkcQwqNS2Tz1VbNEWK8YM_Q' target="blank"> AIRE DE TRABAJO </a></p>
            </div>
          </div>
        </div>
        </div>


)
}
