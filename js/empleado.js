/**
 * Empleado:
 * 
 * @author Fco Javier González Sabariego
 */
{
    let inputNombre;
    let inputFecha;
    let inputDNI;

    let validaNombre;

    document.addEventListener("DOMContentLoaded",function() {
        inputNombre = document.getElementById("nombre");
        inputFecha = document.getElementById("fecha");
        inputDNI = document.getElementById("dni");

        inputNombre.addEventListener("blur", () => {
            validaNombre = /^((\w||ñ||á||é||í||ó||ú)+\s)?((\w||ñ||á||é||í||ó||ú)+\s){2}((\w||ñ||á||é||í||ó||ú)+)$/i;
            inputNombre.setAttribute("class",(validaNombre.test(inputNombre.value)) ? "valido" : "error");
        });

        inputDNI.addEventListener("blur", () => {
            validaDNI = /^([0-9]{8})(\s||-)([A-Z])$/i;
            if (validaDNI.test(inputDNI.value))
                inputDNI.setAttribute("class",(validaDNI.test(inputDNI.value)) ? "valido" : "error"); //Me falta validar el módulo de la letra
            else
                inputDNI.setAttribute("class","error");
        });
    });
}