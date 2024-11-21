
const form = document.querySelector('#formulario');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value); 
    const calcImc = peso / altura ** 2;
    setResultado(calcImc.toFixed(1), true);

    if (calcImc <= 18.5) {
        setResultado(`${calcImc.toFixed(1)}, Abaixo do Peso.`);
    } else if (calcImc >= 18.5 && calcImc <= 24.9) {
        setResultado(`${calcImc.toFixed(1)}, Peso Normal.`);
    } else if (calcImc > 24.9 && calcImc <= 29.9) {
        setResultado(`${calcImc.toFixed(1)}, Sobrepeso.`);
    } else if (calcImc > 29.9 && calcImc <= 34.9) {
        setResultado(`${calcImc.toFixed(1)}, Obesidade Grau I.`);
    } else if (calcImc > 34.9 && calcImc <= 39.9) {
        setResultado(`${calcImc.toFixed(1)}, Obesidade Grau II.`);
    } else if (calcImc >= 39.9) {
        setResultado(`${calcImc.toFixed(1)}, Obesidade Grau III.`);
    }
    if (!calcImc) {
        setResultado('Valor inválido. Por favor digite um valor válido, somente numeros');  
    }
    if (altura===Number.parseInt(inputAltura.value) || !altura) {
        setResultado('Altura inválido. Por favor digite um valor valido (EX: 1.70)', false);
    }

    if (!peso) {
        setResultado('Peso inválido. Por favor digite um valor válido, somente numeros', false);
    }
 
});

//funcao para setar o resultado

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado-h4');
    resultado.innerHTML = msg;
    if (isValid===false) {
        resultado.style.color ='red';
    } else {
        resultado.style.color = 'green';
    }
    


}
 
