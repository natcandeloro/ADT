import "../Assets/Css/Modal.css"
import radio from "../Assets/Statics/radionoticias.jpg"
import fer from "../Assets/Statics/Zarraga.jpg"

const Modal =({Children, isOpen, closeModal})=> {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return( 
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className='modal-container' onClick={handleModalContainerClick}>
  
        <button type="button" className="modal-close btn-close" aria-label="Close" onClick={closeModal}></button>
        <h2>FRANQUICIA MENDOZA</h2>
            <div className="d-flex">
              <img src={ fer } alt="Fernando Zarraga" className="conductor"/> 
             <div className="col">
              <h6>Medio: Radio Noticias Mendoza, FM 102.5 y su red de radios en el interior provincial.</h6>
              <h6 >Conducción: Fernando Zárraga</h6>
              </div>
            </div>
            <div className="d-flex">
              <img src={ radio }  alt="Logo Radio Noticias" className="logoradio"/>
              <h6> <a href="www.radionoticiasmendoza.com">Escuchar en vivo, de 12 a 13 horas.</a></h6>
            </div>
              <h6 >Nos auspician:</h6> 	
                <ol>AMPROS</ol>
                <ol>AOMA (Secc. Mza.)</ol>
                <ol>APA (Asoc. Personal Aeronáutico)</ol>
                <ol>APJ Gas</ol>
                <ol>Asoc. Gremial Empleados y Funcionarios del Poder Judicial de Mza.</ol>
                <ol>ATSA (Secc. Mza.)</ol>
                <ol>CEC Mendoza</ol>
                <ol>Concejo Deliberante de Guaymallén</ol>
                <ol>Coop. Electrificación Rural Alto Verde y Algarrobo Grande Ltda.</ol>
                <ol>FADIUNC</ol>
                <ol>FOEVA</ol>
                <ol>Gobierno de Mendoza</ol>
                <ol>MDZ Social Media</ol>
                <ol>Municipalidad de la Ciudad de Mendoza</ol>
                <ol>Municipalidad de Maipú</ol>
                <ol>Municipalidad de Luján de Cuyo</ol>
                <ol>Municipalidad de San Carlos</ol>
                <ol>Municipalidad de San Rafael</ol>
                <ol>SAT SAID (Secc. Mza.)</ol>
                <ol>SOEVA Maipú</ol>
                <ol>SUOES (Sind. Unión Obrera Estaciones de Servicio de Cuyo)</ol>
                <ol>SUPEh (Secc. Mza.)</ol>
                <ol>UDA (Secc. Mza.)</ol>
                <ol>UOLRA (Secc. Mza.)</ol>
                <ol>UPSA </ol>
              
        {Children}
    </div> 
  </article>
  );
};

export default Modal;  