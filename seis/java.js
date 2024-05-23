function BM(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    let menor = num1;

    if (num2 < menor) {
      menor = num2;
    }
    if (num3 < menor) {
      menor = num3;
    }
    if (num4 < menor) {
      menor = num4;
    }

    const result = `O menor número é: ${menor}`;
    document.getElementById('result').innerHTML = result;
  }
 