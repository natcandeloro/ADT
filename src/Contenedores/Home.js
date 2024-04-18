import React from "react";
import "../Assets/Css/Home.css"
import nota4 from "../Assets/Statics/nota4.jpg"
import trabajoNegro from "../Assets/Statics/trabajo-en-negro.jpg"
import mercadopago from "../Assets/Statics/mercadopago.jpg"
import emprendedor from "../Assets/Statics/emprendedor.jpg"

export default function Home() { 
 return (

<div className="container"> 
    <div className="d-flex justify-content-center">
    <div id='col principal'>
        <div className="card col m-12 shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title">Campaña foránea para reducir el trabajo en negro en la Argentina</h5>
            <p className="card-text1">Desde la OIT (Organización Internacional del Trabajo) lanzaron el programa “Formalicemos”, que busca reducir la importante cantidad (45 por ciento) de trabajadores informales.</p> 
            <p ><a href="https://ciudadano.news/nacionales/de-que-se-trata-formalicemos-la-campana-de-la-oit-para-combatir-el-trabajo-en-negro-en-argentina" className="mas" target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={ trabajoNegro} alt="Trabajo en Negro"/>
        </div>
        </div>
    </div>
    </div>
    <div className="align-content-center flex-wrap">
    <div id='movil' className="col">
        <div  className="card m-4 cajashome shadow-lg noticias"> 
        <div className="card-body">
            <h5 className="card-title1">El ser emprendedor en Argentina</h5>
            <p className="card-text">No todo empieza y termina en la relación de dependencia laboral. También existe la posibilidad de trabajar y crecer a partir de tus buenas ideas, por tu propia cuenta. Sólo es cuestión de decidirte.</p>
            <p ><a href="https://www.argentina.gob.ar/tema/emprender/soy-emprendedor" className="mas" target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid on off" src={emprendedor } alt="emprendedor"/>
        </div>
        </div>
    </div>
    <div  id='movil' className="col">
        <div className="card m-4 cajashome shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title1">Cómo evitar estafas en Mercado Pago</h5>
            <p className="card-text">El ecosistema del unicornio es el más utilizado en la Argentina para realizar operaciones de pagos y comercio electrónico. Las claves para evitar los ocho fraudes más peligrosos.</p>
            <p><a href="https://www.iproup.com/economia-digital/32978-mercado-pago-mercado-libre-6-mayores-estafas-y-como-evitarlas" className="mas"target="blank">Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={ mercadopago } alt="Emprendedor"/>
        </div>
        </div>
    </div>
    <div id='movil'className="col">
        <div  className="card m-4 cajashome shadow-lg noticias">
        <div className="card-body">
            <h5 className="card-title1">¿Cuáles son los feriados de este 2023?</h5>
            <p className="card-text">El año ya comenzó, y ya el Gobierno nacional publicó cuáles serán los off, para viajar y descansar. Estos son momentos ideales para proyectar con tiempo y aprovechar.</p>
            <p ><a href="https://www.argentina.gob.ar/interior/feriados-nacionales-2023" className="mas" target="blank"> Ver más</a></p>
            <img className="rounded mx-auto d-block img-fluid" src={nota4} alt="calendario"/>
        </div>
        </div>
    </div>
</div>  

</div>
);
} 
