let num1 = document.querySelector("#num1");
let calcular = document.querySelector("#calcular");
let pago = document.querySelector("#pago");

calcular.onclick = function () {
    let valor = parseFloat(num1.value);
    let reajuste = valor * 0.01;
    pago.textContent = valor + reajuste;
}