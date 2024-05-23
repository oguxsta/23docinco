function RM() {
    
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var RM;

    if (valor1 > valor2) {
        RM = valor1;
    } else {
        RM = valor2;
    }

    document.getElementById("resultado").innerText = "Esse prevalece " + RM;
}