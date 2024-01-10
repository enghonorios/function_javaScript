/**  const peso = 81;
     const altura = 1.58;

const abaixoDoPeso = 18.5;
const pesoNormal = 25;
const acimaDoPeso = 30;
const obeso = 40;
const obesidadeGrave = 40;

const IMC = (peso) / Math.pow(altura, 2);
console.log(IMC.toFixed(2));

if (IMC < abaixoDoPeso) {
    console.log('Abaixo do Peso:', IMC.toFixed(2));
} else if (IMC >= abaixoDoPeso && IMC < pesoNormal) {
    console.log('Peso normal:', IMC.toFixed(2));
} else if (IMC >= pesoNormal && IMC < acimaDoPeso) {
    console.log('Acima do peso:', IMC.toFixed(2));
} else if (IMC >= acimaDoPeso && IMC < obeso) {
    console.log('Obeso:', IMC.toFixed(2));
} else if (IMC > obesidadeGrave) {
    console.log('Obesividade grave:', IMC.toFixed(2));
} else {
    console.log('Peso inválido')  */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso: ';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal: ';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso: ';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso: ';
    } else {
        return 'Obesividade grave: ';
    }
}

function main() {
    const peso = 90;
    const altura = 1.80;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
} /** } (); se colocar aqui chama função imediatamente invocada o codigo funciona somente uma vez*/

main()