import "../Assets/Css/Franquicia.css"
import mendoza from "../Assets/Statics/mendoza.png"
import Modal from '../Componentes/Modal'
import { useModal } from '../hooks/useModal';
import "../Assets/Css/Modal.css"
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  residencia: "",
  mensaje: "", 
} 

const validateForm = (form) => {
  let errors = {};
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  }
  if (!form.email.trim()) {
    errors.email = "El campo 'E-mail' es requerido.";
  }
  if (!form.phone.trim()) {
    errors.phone = "El campo 'Teléfono' es requerido.";
  }
  if (!form.residencia.trim()) {
    errors.residencia = "El campo 'Lugar de Residencia' es requerido.";
  }
  if (!form.mensaje.trim()) {
    errors.mensaje = "El campo 'Mensaje' es requerido.";
  }
  return errors;
}

const Franquicia = () => {
  const {    
    form,
    errors,
    loading,
    reponse,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm)
  const [isOpenModal,openModal,closeModal] = useModal(false);

  return (
    <div className='espiritu'>
      <h6 className='h6'>El haber llegado a los 15 años de existencia con Aire de Trabajo nos hace mirar más hacia adelante. En una nueva instancia en pos de ese crecimiento, hemos decidido franquiciar el espacio, para replicar en la mayor parte de las geografías posibles nuestra propuesta periodística.</h6> 
      <h6 className='h6'>Con el asesoramiento de la empresa 384 Group, especializada en franquicias y pymes, decidimos dar el paso fundamental.</h6>
      <br />
      <br />
      <div className="d-flex align-content-center flex-wrap">
            <div className="col"><h6 className='h6'>Estamos en:</h6>
        <figure className="img-fluid"><img src={ mendoza }  alt="Mapa de Mendoza" onClick={openModal} className="mendoza img-fluid" /></figure>
      <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
      </div>
    <div className="col formulario">   
    
    <h6 className='contacdetalle'>Si te gustan los desafíos y querés acompañarnos, <br/>te invitamos a dejar tus datos en la siguiente planilla, <br/>y a la brevedad nos estaremos comunicando para interiorizarte más.</h6> 
        <form className="form-class" onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        className="form-class" 
        placeholder="Nombre" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
        required=""/>   
        {errors.name && <p className="requerido">{errors.name}</p>}
        <input 
        type="text" 
        name="phone" 
        className="form-class" 
        placeholder="Teléfono" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.phone}
        required=""/>
        {errors.phone && <p className="requerido">{errors.phone}</p>}
        <input 
        type="email" 
        name="email" 
        className="form-class" 
        placeholder="E-mail" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.email}
        required=""/>
        {errors.email && <p className="requerido">{errors.email}</p>}
        <input 
        type="text" 
        name="residencia" 
        className="form-class" id="" 
        placeholder="Lugar de Residencia" 
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.residencia}
        required=""/>
        {errors.residencia && <p className="requerido">{errors.residencia}</p>}
        <textarea 
        name="mensaje" 
        className="form-class" 
        placeholder="Mensaje" 
        cols="50"
        rows="5"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.mensaje}
        required="">
        </textarea>
        {errors.mensaje && <p className="requerido">{errors.mensaje}</p>}
        <input type="submit" value="Enviar" className="enviar"/>
    </form>
        {loading && <p className="enviando">Enviando...</p>}
        {reponse && <p className="enviado">"Los datos han sido enviados"</p>}
    </div>
</div>
  </div>
    )
  };  

  export default Franquicia;
  
  
  
