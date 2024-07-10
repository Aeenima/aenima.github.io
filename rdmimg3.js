document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const imagen1 = document.getElementById('redimagen1');
    const imagen2 = document.getElementById('redimagen2');
    const videoContainer = document.getElementById('video-container33');
    const video = document.getElementById('video');

    // Función para mostrar el video y la segunda imagen al hacer clic en la primera imagen
    function mostrarVideo() {
        // Ocultar la primera imagen
        imagen1.style.display = 'none';
        // Mostrar la segunda imagen (que contiene el video)
        imagen2.style.display = 'inline'; // Asegúrate de que imagen2 inicialmente esté oculta en el CSS
        // Mostrar el contenedor del video
        videoContainer.style.display = 'block';
        // Reproducir el video
        video.play();
    }

    // Asignar evento click a imagen1 para llamar a la función mostrarVideo
    imagen1.addEventListener('click', mostrarVideo);
});
