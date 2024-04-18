import "../Assets/Css/Franquicia.css"
import mendoza from "../Assets/Statics/copia1.png"
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
      <h6 className='h6'>El presente nos hace mirar más hacia adelante. En una nueva instancia de crecimiento, hemos decidido expandir el programa a todo el país.</h6> 
      <h6 className='h6'>Con el asesoramiento de la empresa <strong>384 Group</strong>, especializada en franquicias y pymes, decidimos dar el paso fundamental.</h6>
      <br />
      <br />
      <div className="d-flex align-content-center flex-wrap">
            <div className="col formulario"><h6 className='h6'>Ya estamos en:</h6>
        <figure><img src={ mendoza }  alt="Mapa de Mendoza" onClick={openModal} className="mendoza img-fluid" /><h4 className="mza">Mendoza</h4></figure>
        
      <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
      </div>
</div>
  </div>
    )
  };  

  export default Franquicia;
  
  
  
