let num1= document.querySelector("#num1");
let num2= document.querySelector("#num2");
let h2titulo= document.querySelector("#balanca");

function Resultado(){
    let var1 ="";
    let var2 ="";

var1=Number(num1.value);
var2=Number(num2.value);
balanca.textContent=var1*var2;
}
soma.onclick =function(){
    Resultado();
}