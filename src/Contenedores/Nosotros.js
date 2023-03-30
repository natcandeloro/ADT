import zarraga from "../Assets/Statics/staff/Zarraga.jpg"
import Escudero from "../Assets/Statics/staff/Escudero.jpeg"
import candeloro from "../Assets/Statics/staff/Candeloro.jpeg"
import "../Assets/Css/Nosotros.css"
import Taboada from "../Assets/Statics/staff/Taboada.jpg"
import Bustos from "../Assets/Statics/staff/Bustos.jpeg"
import Perez from "../Assets/Statics/staff/Perez.jpeg"
import Sarmiento from "../Assets/Statics/staff/Sarmiento.jpeg"
import Aliquo from "../Assets/Statics/staff/Aliquo.jpeg"


function Nosotros() {
  return (
    <div className="nosotros">
      <div className="pepe">
   <div className="col">
    <div className="card m-4" id="this">
      <img src={zarraga} id="img-tamaño" className="card-img-top" alt="Foto de Fernando Zárraga." />
      <div className="card-body fondo">
        <h3>Fernando</h3> 
        <h3>Zárraga</h3>
        <p className="card-text somos">Lic. en Comunicación Social </p>
        <p className="card-text somos"><strong>Dirección General</strong><br/>Franquicias y Redes</p>
      </div>
</div></div>
<div className="col">
<div className="card m-4" id="this">
  <img src={Escudero} id="img-tamaño" className="card-img-top" alt="Foto de Paola Escudero."/>
  <div className="card-body fondo">
    <h3>Paola </h3>
    <h3>Escudero</h3>
    <p className="card-text somos">Administrativa</p>
    <p className="card-text somos"><strong>Administración y Comercial</strong></p>
  </div>
</div></div>
<div className="col">
<div className="card m-4" id="this" >
  <img src={candeloro} id="img-tamaño" className="card-img-top" alt="Foto de Natalia Candeloro."/>
  <div className="card-body fondo">
    <h3>Natalia</h3>
    <h3> Candeloro</h3>
    <p className="card-text somos">Estudiante de Programación</p>
    <p className="card-text somos"><strong>Desarrollo Web</strong></p>
  </div>
</div></div></div>
<div className="pepe">
<div className="col">
<div className="card m-4" id="this">
  <img src={Taboada} id="img-tamaño" className="card-img-top" alt="Foto de Adrián Taboada."/>
  <div className="card-body fondo">
    <h3>Adrián</h3>
    <h3> Taboada</h3>
    <p className="card-text somos"> CEO 384 Group (Mendoza)</p>
    <p className="card-text somos"><strong>Soporte Franquicias</strong></p>
  </div>
</div></div>
<div className="col">
    <div className="card m-4" id="this">
      <img src={Aliquo} id="img-tamaño" className="card-img-top" alt="Foto de Gisela Aliquo" />
      <div className="card-body fondo">
        <h3>Gisela</h3> 
        <h3>Aliquo</h3>
        <p className="card-text somos">Lic. en Comunicación Social</p>
        <p className="card-text somos"><strong>Asesora Comercial Franquicias</strong></p>
      </div>
</div></div>
<div className="col">
<div className="card m-4" id="this">
  <img src={Bustos} id="img-tamaño" className="card-img-top" alt="Foto de Pamela Bustos."/>
  <div className="card-body fondo">
    <h3>Liliana Pamela</h3>
    <h3> Bustos Nasi</h3>
    <p className="card-text somos"> Contadora Pública Nacional</p>
    <p className="card-text somos"><strong>Asesoría Contable</strong> </p>
  </div>
</div></div></div>
<div className="pepe">
<div className="col">
    <div className="card m-4" id="this">
      <img src={Perez} id="img-tamaño" className="card-img-top" alt="Foto de María Fernanda Pérez" />
      <div className="card-body fondo">
        <h3>María Fernanda</h3> 
        <h3>Pérez</h3>
        <p className="card-text somos">Lic. en Diseño Gráfico </p>
        <p className="card-text somos"><strong>Asesoría en Diseño Gráfico</strong></p>
      </div>
</div></div>
<div className="col">
    <div className="card m-4" id="this">
      <img src={Sarmiento} id="img-tamaño" className="card-img-top" alt="Foto de Emililiano Bustos Sarmiento" />
      <div className="card-body fondo">
        <h3>Emiliano</h3> 
        <h3>Bustos Sarmiento</h3>
        <p className="card-text somos">Abogado</p>
        <p className="card-text somos"><strong>Asesoría Jurídica</strong></p>
      </div>
</div></div></div>
</div>
  )
}
export default Nosotros;




