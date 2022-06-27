'use strict'
const mostrarReloj = ()=>{
    const fecha = new Date();
    let hr =  formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;    

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'MAy', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate(); /*getDate() nos regresa el número de día. Ejemplo: 1. 24, 30, etc */
    let mes = meses[fecha.getMonth()];
    let  fechaTexto = `${diaSemana}-${dia}-${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
}
setInterval(mostrarReloj, 1000);

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0'+hora;
    }
    return hora
}