const dateBuilder = (d) => {
  let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
"agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} de ${month} de ${year}`
}

function fecha() {
  return (
    <div className="date">{dateBuilder(new Date())}</div>
  )
}

export default fecha;