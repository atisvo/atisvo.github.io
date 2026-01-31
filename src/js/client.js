// Script para mostrar la fecha actual en el div con id 'fecha'
window.addEventListener('DOMContentLoaded', function() {
  const fechaDiv = document.getElementById('fecha');
  const fechaActual = new Date();
  // Formato: día/mes/año
  const fechaFormateada = fechaActual.toLocaleDateString();
  fechaDiv.textContent = fechaFormateada;

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

  // Obtener y mostrar la IP pública
  const ipDiv = document.getElementById('ip');
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ipDiv.textContent = data.ip;
    })
    .catch(() => {
      ipDiv.textContent = '';
    });

  // Detectar tipo de dispositivo
  const dispositivoDiv = document.getElementById('device');
  const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  dispositivoDiv.textContent = esMovil ? 'Mobil/Tablet' : 'PC/Desktop';
});
