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

  
  setInterval(() => {
    actualizarFechaHora();
  }, 100);

});
