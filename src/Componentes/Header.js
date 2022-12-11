import { Link} from "react-router-dom"
import "../Assets/Css/Header.css"
import logo from "../Assets/Statics/logo.png"
import logoadt from "../Assets/Statics/logoadt.png"
import facebook from "../Assets/Statics/facebook.png"
import instagram from "../Assets/Statics/instagram.png"
import spotify from "../Assets/Statics/spotify.png"
import youtube from "../Assets/Statics/youtube.png"
import ivoox from "../Assets/Statics/ivoox.png"
import twitter from "../Assets/Statics/twitter.png"
import MenuBar from './MenuBar'
import Clima from "../Componentes/clima";
import Fecha from "./fecha"


 function Header() {

  return (

        <header>
            <div className=''>
            <div id='red'>
                <div>
                    <a  href='https://www.facebook.com/airedetrabajo.argentina/?hc_ref=ARSTwwKxP5pH9XxciEfce3VlG_sEWTylpClmIZ8LhubTE0R_dOXhZHeBi5oOFg-zy_o&fref=nf&__xts__[0]=68.ARD8kEmDjl6cERvaU0vgg_Rb8qpTH_pLuQYqf3cx9_3czVgFzOzeyy0mRslcblxDQroyxCxzQhQWN61uX4QiOf63r2rlSywdnC-88zsXWeBZLtOEdTVglu46QHB5rC5H3-iuoTe2KxSeBvZFQX-hewBR7XegNodiDplJqZ6-RDNOVk87MnACU2BTXqNnz5OvMn1-YtS0QMq_m6wULxkY1G3lx3xcdoIeoKyLz7KUTM_CITOhmDVMdXOF_cg949f9qQt-59zS0hkQUaOK8lL7s7b2r889yKMlzN23-GZqEAEW_YoUbVI' target="blank"> <img src={facebook} alt="Logo de Facebook"  className='redes'/></a>
                    <a  href='https://twitter.com/AireDeTrabajo?t=KalHSv4_xKbXWeIpxzpMDg&s=09' target="blank"> <img src={twitter} alt="Logo de Twitter"  className='redes'/> </a>
                    <a  href="https://instagram.com/airedetrabajo.argentina?igshid=YmMyMTA2M2Y=" target="blank"> <img src={instagram} alt="Logo de Instagram"  className='redes'/> </a>
                    <a  href='https://open.spotify.com/show/3r5JpdVTX4nXXoUVphlTSI?si=797a76a889ad4f54' target="blank"> <img src={spotify} alt="Logo de Spotify"y  className='redes'/></a>
                    <a  href='https://www.ivoox.com/escuchar-aire-de-trabajo_nq_1315418_1.html' target="blank"><img src={ivoox} alt="Logo de Ivoox"  className='redes'/></a>
                    <a  href='https://youtube.com/channel/UCkcQwqNS2Tz1VbNEWK8YM_Q' target="blank"> <img src={youtube} alt="Logo de Youtube"  className='redes'/> </a>
                </div>
                <div>
                <Fecha></Fecha>
                </div>
                <div className="buscador">
                    <form method="get" target="blank" action="https://google.com/search">
                        <input type="search" name="q" placeholder="Buscar en Google" autoComplete="off" className="bgoogle" target="blank"></input>
                        <button type="submit" className="google"> Buscar</button>
                    </form>
                </div>
                </div>
            <div id='logos'>
                <div className="cajatm"><Link to="/"><img src={ logo }  alt="logo de aires de trabajo" className='img-fluid logo'/></Link></div>
                <div ><Link to="/"><img src={ logoadt } alt="logoadt" className='img-fluid logoletras'/></Link></div>
                <div className='clima'>
                <Clima></Clima>
                </div>
            </div></div>
            <MenuBar></MenuBar>
        
        </header> 
  )
}
export default Header;