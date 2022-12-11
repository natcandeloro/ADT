import "../Assets/Css/clima.css"
import nubes from "../Assets/Statics/iconos/dom.png"

function clima () {
window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripccion = document.getElementById('temperatura-descripcion')

    let ubicacionr = document.getElementById('ubicacion')

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion => {
        //console.log(posicion.coords.latitude)
        lon = posicion.coords.longitude
        lat = posicion.coords.latitude

        const url = 'https://api.openweathermap.org/data/2.5/weather?q=MENDOZA,ARGENTINA&lang=es&units=metric&appid=8631c28fa310f08234ee3ecd691169fc'

        fetch(url)
        .then ( response => { return response.json() })
        .then( data => {
          let temp = Math.round(data.main.temp)
          temperaturaValor.textContent = `${temp} °C`

          let desc = data.weather[0].description
          temperaturaDescripccion.textContent = desc.toUpperCase()

          ubicacionr.textContent = data.name
          console.log(data.name)
          
        })
        .catch( error => {
          console.log(error)
        })
       })
    }
})
  return (

    <div id='contiene'>
        <div id='caja1'>            
          <h1 id='ubicacion'> </h1>
          <h1 id='temperatura-descripcion'> </h1>
          <h1 id='temperatura-valor'> </h1>
          <img id='icono-animado' src={nubes} alt='Nubes' height="40" width="40"/>
        </div>
    </div>
  )
}

export default clima