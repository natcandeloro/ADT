import React from "react";
import "../Assets/Css/Home.css"
import nota4 from "../Assets/Statics/nota4.jpg"
import ministerio from "../Assets/Statics/ministerio.jpg"
import mercadopago from "../Assets/Statics/mercadopago.jpg"
import emprendedor from "../Assets/Statics/emprendedor.jpg"

export default function Home() { 
 return (

<div className="container"> 
    <div className="d-flex justify-content-center">
    <div id='col principal'>
        <div className="card col m-12 shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title">Usuarios de Mercado Libre y Mercado Pago, en riesgo: cuáles son las 8 estafas más peligrosas y cómo evitarlas </h5>
            <p className="card-text1">El ecosistema del unicornio es el más utilizado en la Argentina para realizar operaciones de pagos y comercio electrónico. Las claves para evitar fraudes.</p> 
            <p ><a href="https://www.iproup.com/economia-digital/32978-mercado-pago-mercado-libre-6-mayores-estafas-y-como-evitarlas" className="mas" target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={mercadopago } alt="emprendedor"/>
        </div>
        </div>
    </div>
    </div>
    <div className="align-content-center flex-wrap">
    <div id='movil' className="col">
        <div  className="card col m-4 shadow-lg noticias"> 
        <div className="card-body">
            <h5 className="card-title1">El ser emprendedor en Argentina</h5>
            <p className="card-text">No todo empieza y termina en la relación de dependencia laboral. También existe la posibilidad de trabajar y crecer a partir de tus buenas ideas, por tu propia cuenta. Sólo es cuestión de decidirte.</p>
            <p ><a href="https://www.argentina.gob.ar/tema/emprender/soy-emprendedor" className="mas" target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid on off" src={emprendedor } alt="emprendedor"/>
        </div>
        </div>
    </div>
    <div  id='movil' className="col">
        <div className="card col m-4 shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title1">Trámites y servicios de trabajo y empleo</h5>
            <p className="card-text">Todo para acceder a los programas y servicios que te ofrece el Ministerio de Trabajo, Empleo y Seguridad Social de la Nación. Sacar turnos, denunciar, recibir orientación, asesoramiento y más.</p>
            <p><a href="https://www.argentina.gob.ar/trabajo/servicios" className="mas"target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={ ministerio} alt="ministerio de trabajo"/>
        </div>
        </div>
    </div>
    <div id='movil'className="col">
        <div  className="card col m-4 shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title1">¿Cuáles son los feriados que quedan de 2022?</h5>
            <p className="card-text">Va terminando este año, pero aún nos quedan algunos feriados para poder viajar, o por qué no, descansar. En el siguiente link figura el calendario, para tener en cuenta y poder organizarse. </p>
            <p ><a href="https://www.argentina.gob.ar/interior/feriados-nacionales-2022" className="mas" target="blank"> Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={nota4} alt="calendario"/>
        </div>
        </div>
    </div>
</div>  

</div>
);
} 
