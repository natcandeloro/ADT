import zarraga from "../Assets/Statics/Zarraga.jpg"
import Escudero from "../Assets/Statics/Escudero.jpeg"
import candeloro from "../Assets/Statics/Candeloro.jpeg"
import "../Assets/Css/Nosotros.css"
import Taboada from "../Assets/Statics/Taboada.jpg"
import Bustos from "../Assets/Statics/Bustos.jpeg"

function Nosotros() {
  return (
    <div className="espiritu">
 <div className="nosotros">
   <div className="col">
    <div className="card" Style="width: 12rem; height:470px">
      <img src={zarraga} id="img-tamaño" className="card-img-top" alt="Foto de Fernando Zárraga." />
      <div className="card-body">
        <h3>Fernando Zárraga</h3>
        <p className="card-text">52 años</p>
        <p className="card-text">Lic. en Comunicación Social </p>
        <p className="card-text">Director General / Redes</p>
      </div>
</div></div>
<div className="col">
<div className="card" Style="width: 12rem; height:470px">
  <img src={Escudero} id="img-tamaño" className="card-img-top" alt="Foto de Paola Escudero."/>
  <div className="card-body">
    <h3>Paola Escudero</h3>
    <p classNameName="card-text">45 años</p>
    <p className="card-text">Coordinadora General </p>
  </div>
</div></div>
<div className="col">
<div className="card" Style="width: 12rem; height:470px">
  <img src={Taboada} id="img-tamaño" className="card-img-top" alt="Foto de Fernando Zárraga."/>
  <div className="card-body">
    <h3>Adrián Taboada</h3>
    <p className="card-text">43 años</p>
    <p className="card-text"> CEO 384 Group (Mendoza)</p>
    <p className="card-text">Soporte Franquicias</p>
  </div>
</div></div>
<div className="col">
<div className="card" Style="width: 12rem; height:470px">
  <img src={Bustos} id="img-tamaño" className="card-img-top" alt="Foto de Fernando Zárraga."/>
  <div className="card-body">
    <h3>Liliana Pamela Bustos Nasi</h3>
    <p className="card-text">49 años</p>
    <p className="card-text"> Contadora Pública Nacional</p>
    <p className="card-text">Asesoría Contable </p>
  </div>
</div></div>
<div className="col">
<div className="card" Style="width: 12rem; height:470px">
  <img src={candeloro} id="img-tamaño" className="card-img-top" alt="Foto de Fernando Zárraga."/>
  <div className="card-body">
    <h3>Natalia Candeloro</h3>
    <p className="card-text">29 años</p>
    <p className="card-text">Página Web</p>
  </div>
</div></div>
</div></div>
  )
}
export default Nosotros;




