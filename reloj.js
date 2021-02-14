const hora = document.getElementById('hora'),
    fecha = document.getElementById('fecha')

    console.log(fecha)
const meses = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
"Agosto","Septiembre","Octubre","Noviembre","Diciembre"
]

const interval = setInterval(() => {
    const local = new Date();

    let dia = local.getDate(),
        mes = local.getMonth(),
        anio = local.getFullYear();

    hora.innerHTML = "local.toLocaleTimeString()";
    fecha.innerHTML = `${dia} ${mes} ${anio}`
}, 1000);