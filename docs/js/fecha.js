// Script para mostrar la fecha actual en el div con id 'fecha'
window.addEventListener('DOMContentLoaded', function() {
  const fechaDiv = document.getElementById('fecha');
  const fechaActual = new Date();
  // Formato: día/mes/año
  const fechaFormateada = fechaActual.toLocaleDateString();
  fechaDiv.textContent = fechaFormateada;
});
