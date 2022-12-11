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
              <h4>Contacto con Aire de Trabajo:</h4><br/>
                <p><img src={whatsapp} alt="Logo de Whatsapp" className='logoi'/><a href='https://wa.me/5492612469993' target="blank">261-2469993</a></p>
                <p><img src={gmail} alt="Logo de Gmail" className='logoi'/><a href="mailto:airedetrabajo.argentina@gmail.com" target="blank">airedetrabajo.argentina@gmail.com</a>
                 </p> <br/>
              <h5>Redes sociales:</h5>
                <p><img src={facebook} alt="Logo de Facebook" className='logoi'/><a href='https://www.facebook.com/airedetrabajo.argentina' target="blank"> Aire de Trabajo</a></p>
                <p><img src={twitter} alt="Logo de Twitter" className='logoi'/><a href='https://twitter.com/AireDeTrabajo?t=KalHSv4_xKbXWeIpxzpMDg&s=09' target="blank"> Aire de Trabajo </a></p>
                <p><img src={instagram} alt="Logo de Instagram" className='logoi'/><a href='https://instagram.com/airedetrabajo.argentina?igshid=YmMyMTA2M2Y=' target="blank"> Aire de Trabajo</a></p>
                <p><img src={spotify} alt="Logo de Spotify" className='logoi'/><a href='https://open.spotify.com/show/3r5JpdVTX4nXXoUVphlTSI?si=797a76a889ad4f54' target="blank"> Aire de Trabajo - Podcast</a></p>
                <p><img src={ivoox} alt="Logo de Ivoox" className='logoi'/><a href='https://www.ivoox.com/escuchar-aire-de-trabajo_nq_1315418_1.html' target="blank"> Aire de Trabajo (Argentina) - Podcast</a> </p>
                <p><img src={youtube} alt="Logo de Youtube" className='logoi'/><a href='https://youtube.com/channel/UCkcQwqNS2Tz1VbNEWK8YM_Q' target="blank"> Aire de Trabajo </a></p>
            </div>
          </div>
        </div>

)
}
