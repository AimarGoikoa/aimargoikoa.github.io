document.querySelectorAll(".mostrarDescripcion").forEach(boton => {
    boton.addEventListener("click", function() {
        const descripcion = this.parentNode.querySelector(".descripcion");
        if (descripcion.style.display === "none" || descripcion.style.display === "") {
            descripcion.style.display = "block";
            this.textContent = "Ocultar";
        } else {
            descripcion.style.display = "none";
            this.textContent = "Ver mas";
        }
    });
});
