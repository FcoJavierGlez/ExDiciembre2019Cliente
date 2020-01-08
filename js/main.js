/**
 * Examen diciembre 2019
 * 
 * @author Fco Javier González Sabariego
 */
{
    let enlaceInfo;
    let botonEmpleado;
    let ventanaInformacion;
    let ventanaEmpleado;

    let init = function() {
        enlaceInfo = document.getElementById("enlaceInfo");
        botonEmpleado = document.getElementById("botonEmpleado");

        enlaceInfo.addEventListener("click", () => {
            ventanaInformacion = window.open();
            ventanaInformacion.document.open();
            ventanaInformacion.document.write(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <meta name="author" content="Fco Javier González Sabariego">
                    <link rel="stylesheet" href="css/normalize.css">
                    <link rel="stylesheet" href="css/cliente.css">
                    <script src="js/informa.js"></script>
                    <title>FRANCISCO JAVIER GONZÁLEZ SABARIEGO</title>
                </head>
                <body>
                    <noscript>
                        <h1>Esta página requiere tener activada la carga de JavaScript</h1>
                    </noscript>
                    <header>
                        <h1>FRANCISCO JAVIER GONZÁLEZ SABARIEGO</h1>
                        <h2>Información</h2>
                    </header>
                    <nav>

                    </nav>
                    <aside>

                    </aside>
                    <main>
                        <input type="submit" id="informa" value="Informa">
                        <input type="submit" id="salir" value="Salir">
                        <div id="contenedor">
                        
                        </div>
                    </main>
                    <footer>
                        <small>Redes sociales del autor:</small> <br/>
                        <a href="https://twitter.com/Fco_Javier_Glez" target="_blank"><img src="images/twitter.png" height="65" alt="Icono Twitter"></a>
                        <a href="https://www.linkedin.com/in/francisco-javier-gonz%C3%A1lez-sabariego-51052a175/" target="_blank"><img src="images/linkedin.png" height="65" alt="Icono Linkedin"></a>
                        <a href="https://github.com/FcoJavierGlez" target="_blank"><img src="images/github.png" height="65" alt="Icono Github"></a>
                    </footer>
                </body>
                </html>`
            );
            ventanaInformacion.document.close();
        });

        botonEmpleado.addEventListener("click", function() {
            ventanaEmpleado = window.open();
            ventanaEmpleado.document.open();
            ventanaEmpleado.document.write(
                `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <meta name="author" content="Fco Javier González Sabariego">
                    <link rel="stylesheet" href="css/normalize.css">
                    <link rel="stylesheet" href="css/cliente.css">
                    <script src="js/empleado.js"></script>
                    <title>FRANCISCO JAVIER GONZÁLEZ SABARIEGO</title>
                </head>
                <body>
                    <noscript>
                        <h1>Esta página requiere tener activada la carga de JavaScript</h1>
                    </noscript>
                    <header>
                        <h1>FRANCISCO JAVIER GONZÁLEZ SABARIEGO</h1>
                        <h2>Empleado</h2>
                    </header>
                    <nav>

                    </nav>
                    <aside>

                    </aside>
                    <main>
                        <label for="nombre">Nombre: <input type="text" id="nombre" value=""></label><br/>
                        <label for="fecha">Fecha de nacimiento: <input type="text" id="fecha" value=""></label><br/>
                        <label for="dni">DNI: <input type="text" id="dni" value=""></label><br/>
                        <input type="submit" id="enviar" value="Confirmar">
                    </main>
                    <footer>
                        <small>Redes sociales del autor:</small> <br/>
                        <a href="https://twitter.com/Fco_Javier_Glez" target="_blank"><img src="images/twitter.png" height="65" alt="Icono Twitter"></a>
                        <a href="https://www.linkedin.com/in/francisco-javier-gonz%C3%A1lez-sabariego-51052a175/" target="_blank"><img src="images/linkedin.png" height="65" alt="Icono Linkedin"></a>
                        <a href="https://github.com/FcoJavierGlez" target="_blank"><img src="images/github.png" height="65" alt="Icono Github"></a>
                    </footer>
                </body>
                </html>`
            );
            ventanaEmpleado.document.close();
        })
    }

    document.addEventListener("DOMContentLoaded",init);

}