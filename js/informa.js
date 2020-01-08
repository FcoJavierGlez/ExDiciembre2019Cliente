/**
 * Información:
 * 
 * Se crea una nueva ventana a partir de index.html, ene sta venta hay dos botones:
 * 
 * -Información: Genera dos párrafos en el primero contiene información del día de la semana y en el segundo
 *               muestra la hora actual y un mensaje asociado según la hora.
 * -Salir: Cierra esta ventana.
 * 
 * @author Fco Javier González Sabariego
 */
{
    let botonInforma;
    let botonSalir;
    let fecha;
    let contenedor;
    let parrafo;
    let texto;

    /**
     * Devuelve en formato texto el día actual de la semana
     * 
     * @return {String} Devuelve un mensaje con el día de la semana
     */
    let diaActual = () => {
        switch (fecha.getDay()) {
            case 1:
                return "Hoy es lunes."
            case 2:
                return "Hoy es martes."
            case 3:
                return "Hoy es miércoles."
            case 4:
                return "Hoy es jueves."
            case 5:
                return "Hoy es viernes."
            case 6:
                return "Hoy es sábado."
            case 7:
                return "Hoy es domingo."
        }
    }

    /**
     * Si los minutos de entrada son inferioes a 10 se devuelve una cadena con los minutos formateados
     * 
     * @param {*} minutos Entrada de los minutos
     * @return {String} Devuelve los minutos formateados "mm"
     */
    let adaptaMinutos = (minutos) => {
        return (minutos<10) ? "0"+minutos : minutos;
    }

    /**
     * Devuelve el mensaje correspondiente a la hora actual
     * 
     * @return {String} Mensaje en función de la hora
     */
    let mensajeHoras = () => {
        switch (fecha.getHours()) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                return `Son las ${fecha.getHours()}:${adaptaMinutos(fecha.getMinutes())}. 
                Ya es hora de que comiences a trabajar. Hay que levantar el país.`;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                return `Son las ${fecha.getHours()}:${adaptaMinutos(fecha.getMinutes())}. 
                Pronto llegan las vacaciones. Aguanta.`;
            default:
                return `Son las ${fecha.getHours()}:${adaptaMinutos(fecha.getMinutes())}. 
                Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar.`;
        }
    }

    /**
     * Crea el elemento con el mensaje del día de la semana y lo devuelve
     * 
     * @return {object} Devuelve el elemento que contiene el mensaje del día
     */
    let annadeDia = () => {
        parrafo = document.createElement("p");
        texto = document.createTextNode(diaActual());
        parrafo.appendChild(texto);
        return parrafo;
    }

    /**
     * Crea el elemento con el mensaje según la hora del día
     * 
     * @return {object} Devuelve el elemento que contiene el mensaje de la hora
     */
    let infoHora = () => {
        parrafo = document.createElement("p");
        texto = document.createTextNode(mensajeHoras());
        parrafo.appendChild(texto);
        return parrafo;
    }

    document.addEventListener("DOMContentLoaded",() => {
        contenedor = document.getElementById("contenedor");
        botonInforma = document.getElementById("informa");
        botonSalir = document.getElementById("salir");
        fecha = new Date();
        
        botonInforma.addEventListener("click",() => {
            contenedor.appendChild(annadeDia());
            contenedor.appendChild(infoHora());
        });

        botonSalir.addEventListener("click",function() {
            window.close();
        });
    })
}