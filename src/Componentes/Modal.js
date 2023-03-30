import "../Assets/Css/Modal.css"
import radio from "../Assets/Statics/radionoticias.jpg"
import fer from "../Assets/Statics/staff/Zarraga.jpg"
import {FaLongArrowAltRight } from "react-icons/fa"
import escuchaspo from "../Assets/Statics/escuchalospotify.png"
import escuchaivoox from "../Assets/Statics/escuchaivoox.png"
import micro from "../Assets/Statics/microfono.png"
import tel from "../Assets/Statics/tel.png"
import radioicono from "../Assets/Statics/radio.png"
import auriculares from "../Assets/Statics/auriculares.png"

const Modal =({Children, isOpen, closeModal})=> {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return( 
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
  
        <button type="button" className="modal-close btn-close" aria-label="Close" onClick={closeModal}></button>
        <h3 className="modaltitulo">FRANQUICIA MENDOZA</h3>
            <div className="d-flex modocel">
              <img src={ fer } alt="Fernando Zarraga" className="conductor"/> 
              <div className="col formulario1">
              <strong><p className="pmodal"><img src={radioicono} alt="Icono Radio" className="oll"/> Radio Noticias Mendoza, FM 102.5 y su red de radios en el interior provincial.</p>
              <p className="pmodal"><img src={micro} alt="Icono Micrófono" className="oll m "/> Fernando Zárraga</p>
              <p className="pmodal"><img src={auriculares} alt="Icono Auriculares" className="oll"/><a href='https://wa.me/5492612469993' target="blank" className="pmodal">261-2469993</a></p></strong>
              <p className="pmodal"><img src={tel} alt="Icono Teléfono" className="oll"/> Escuchá en vivo de lunes a viernes, de 12 a 13 hs. <a className="amodal" href="https://radionoticiasmendoza.com/" target="blank"><img src={ radio }  alt="Logo Radio Noticias" className="logoradio"/></a></p>
              <p className="pmodal">Reviví el programa completo, entrevistas y bloques especiales en<a href='https://open.spotify.com/show/3r5JpdVTX4nXXoUVphlTSI' target="blank"><img src={escuchaspo} alt="Escucha Spotify" className="escucha" /></a> <a href='https://www.ivoox.com/podcast-adt-mendoza_sq_f11562145_1.html' target="blank"><img src={escuchaivoox} alt="Escucha Ivoox" className="escucha"/></a></p></div>
            </div>
              <h6 >Nos auspician:</h6> 	
                <ol><FaLongArrowAltRight className="ol"/>AMPROS</ol>
                <ol><FaLongArrowAltRight className="ol"/>AOMA (Secc. Mza.)</ol>
                <ol><FaLongArrowAltRight className="ol"/>APA (Asoc. Personal Aeronáutico)</ol>
                <ol><FaLongArrowAltRight className="ol"/>APJ Gas</ol>
                <ol><FaLongArrowAltRight className="ol"/>Asoc. Gremial Empleados y Funcionarios del Poder Judicial de Mza.</ol>
                <ol><FaLongArrowAltRight className="ol"/>ATSA (Secc. Mza.)</ol>
                <ol><FaLongArrowAltRight className="ol"/>CEC, Mendoza</ol>
                <ol><FaLongArrowAltRight className="ol"/>Concejo Deliberante de Guaymallén</ol>
                <ol><FaLongArrowAltRight className="ol"/>Coop. Electrificación Rural Alto Verde y Algarrobo Grande Ltda.</ol>
                <ol><FaLongArrowAltRight className="ol"/>FADIUNC</ol>
                <ol><FaLongArrowAltRight className="ol"/>FOEVA</ol>
                <ol><FaLongArrowAltRight className="ol"/>Gobierno de Mendoza</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de la Ciudad de Mendoza</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de La Paz</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de Luján de Cuyo</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de Maipú</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de San Carlos</ol>
                <ol><FaLongArrowAltRight className="ol"/>Municipalidad de San Rafael</ol>
                <ol><FaLongArrowAltRight className="ol"/>SAT SAID</ol>
                <ol><FaLongArrowAltRight className="ol"/>Sindicato Canillitas Mendoza</ol>
                <ol><FaLongArrowAltRight className="ol"/>SOETEM (Sind. Obreros y Empl. Telefónicos Mendoza)</ol>
                <ol><FaLongArrowAltRight className="ol"/>SOEVA Maipú</ol>
                <ol><FaLongArrowAltRight className="ol"/>SUOES (Sind. Unión Obrera Estaciones de Servicio de Cuyo)</ol>
                <ol><FaLongArrowAltRight className="ol"/>SUPEh (Secc. Mza.)</ol>
                <ol><FaLongArrowAltRight className="ol"/>Unión Obrera Ladrillera Rep. Argentina (Secc. Mza.)</ol>
                <ol><FaLongArrowAltRight className="ol"/>UPSA (Unión del Pers. Superior y Prof. de Empresas Aerocomerciales)</ol> 
        {Children}
    </div> 
  </article>
  );
};

export default Modal;  