document.addEventListener("DOMContentLoaded", function() {
    const aceptarcookiesboton = document.getElementById("aceptarcookies");
    const avisocookies = document.getElementById("avisocookies");

    aceptarcookiesboton.addEventListener("click", function() {
        avisocookies.style.display = "none";
    
    });
    
});