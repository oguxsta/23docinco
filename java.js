let num1= document.querySelector("#num1");
let num2= document.querySelector("#num2");
let troco1= document.querySelector("#troco");


function Resultado(){
    let var1 ="";
    let var2 ="";    
    var1=Number(num1.value);
    var2=Number(num2.value);
    let var3 =var1*var2;
    troco1.value=var3;
}
soma.onclick =function(){
    Resultado();
}

function resultado(){

}