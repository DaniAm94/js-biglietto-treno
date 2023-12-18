console.log('JS OK!');

const distance = parseInt(prompt('Inserisci distanza da percorrere in km'));
const age = parseInt(prompt('Inserisci la tua età'));
const showElement = document.getElementById('target');

const fullPrice = 0.21 * distance;

let finalPrice = fullPrice;

if (age < 18) {
    finalPrice *= 0.8;
} else if (age > 65) {
    finalPrice *= 0.6;
}

console.log(`Il prezzo finale è: ${finalPrice.toFixed(2)}€`);
showElement.innerHTML = `Il prezzo finale è: <strong>${finalPrice.toFixed(2)}€</strong>`;
