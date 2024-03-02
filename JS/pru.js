function mostrarInformacion(categoria) {
    // Encuentra el elemento de información correspondiente a la categoría
    var informacion = document.querySelector('.elementos-categoria.' + categoria + ' .informacion');
    
    // Aplica la transformación CSS al hacer clic
    if (informacion.style.display === 'none') {
        informacion.style.display = 'block';
        // Aplica la rotación de 180 grados
        document.querySelector('.elementos-categoria.' + categoria).style.transform = 'rotate(180deg)';
    } else {
        informacion.style.display = 'none';
        // Revierte la rotación
        document.querySelector('.elementos-categoria.' + categoria).style.transform = 'rotate(0deg)';
    }
}
