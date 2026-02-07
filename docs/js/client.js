// Script para mostrar la fecha actual en el div con id 'fecha'
window.addEventListener('DOMContentLoaded', function() {



  const fechaDiv = document.getElementById('date');
  function actualizarFechaHora() {
    const ahora = new Date();
    // Formato: día/mes/año hora:minuto:segundo
    const fechaHora = ahora.toLocaleDateString() + ' ' +
      ahora.toLocaleTimeString();
    fechaDiv.textContent = fechaHora;
  }
  actualizarFechaHora();

  /*
  if (navigator.userAgent) {
    const navDiv = document.getElementById('nav');
    // Detección básica del navegador
    let navegador = '';
    const ua = navigator.userAgent;
    if (/Edg\//.test(ua)) {
      navegador = 'Microsoft Edge';
    } else if (/OPR\//.test(ua) || /Opera/.test(ua)) {
      navegador = 'Opera';
    } else if (/Chrome\//.test(ua)) {
      navegador = 'Google Chrome';
    } else if (/Safari\//.test(ua)) {
      navegador = 'Safari';
    } else if (/Firefox\//.test(ua)) {
      navegador = 'Mozilla Firefox';
    } else if (/MSIE|Trident\//.test(ua)) {
      navegador = 'Internet Explorer';
    }
    navDiv.textContent = navegador;
  }

   */

  /* Detectar tipo de dispositivo
  const dispositivoDiv = document.getElementById('device');
  const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  dispositivoDiv.textContent = esMovil ? 'Mobil/Tablet' : 'PC/Desktop';
*/

  let helloNames = ['CARMEN', 'PABLO', 'LUCAS'];
  let helloNameIndex = 0;

  function getHelloText(name) {
    return 'HOLA!, HOLA!, ' + name;
  }

  const helloDiv = document.getElementById('hello');
  const helloLength = 20;

  // Inicializa los textos para el scroll
  let currentName = helloNames[helloNameIndex];
  let nextName = helloNames[(helloNameIndex + 1) % helloNames.length];
  let currentText = getHelloText(currentName);
  let nextText = getHelloText(nextName);
  // El scroll empieza con espacios, luego la H, y va entrando el texto
  let scrollText = ' '.repeat(helloLength - 1) + currentText + ' '.repeat(helloLength) + nextText;
  let scrollIndex = 0;

  // Estilo para asegurar alineación y visibilidad
  if (helloDiv) {
    helloDiv.style.textAlign = 'left';
    helloDiv.style.width = '20ch';
    helloDiv.style.height = '1.5em';
    helloDiv.style.display = 'inline-block';
    helloDiv.style.fontFamily = 'monospace';
    helloDiv.style.letterSpacing = '0.1em';
    helloDiv.style.whiteSpace = 'pre';
  }

  setInterval(() => {
    if (helloDiv) {
      // Muestra una ventana de 20 caracteres desplazada de derecha a izquierda
      let visible = scrollText.substring(scrollIndex, scrollIndex + helloLength);
      helloDiv.textContent = visible + '\u00A0';
      scrollIndex++;
      // Cuando termina el ciclo, cambia al siguiente nombre
      if (scrollIndex > helloLength - 1 + currentText.length + helloLength) {
        helloNameIndex = (helloNameIndex + 1) % helloNames.length;
        currentName = helloNames[helloNameIndex];
        nextName = helloNames[(helloNameIndex + 1) % helloNames.length];
        currentText = getHelloText(currentName);
        nextText = getHelloText(nextName);
        scrollText = ' '.repeat(helloLength - 1) + currentText + ' '.repeat(helloLength) + nextText;
        scrollIndex = 0;
      }
    }
    // Actualiza fecha y hora cada ciclo
    actualizarFechaHora();
  }, 100);

  /*

  // Obtener y mostrar el mensaje del backend
  const ipDiv = document.getElementById('ip');
  //fetch('https://backend-arume.onrender.com/backend/echo')
  fetch('https://localhost:3000/backend/echo')
      .then(response => response.json())
      .then(data => {
        if (data && data.message) {
          ipDiv.textContent = data.message;
        } else {
          ipDiv.textContent = '';
        }
      })
      .catch(() => {
        ipDiv.textContent = '';
      });


   */
});
