console.log('JS OK!');

const distance = parseInt(prompt('Inserisci distanza da percorrere in km'));
const age = parseInt(prompt('Inserisci la tua età'));
const showElement = document.getElementById('target');
let errorMessage = '';


// Controllo che vengano inseriti dei valori numerici
if (isNaN(distance) || (isNaN(age))) {  // Caso: i valori inseriti non sono numerici
    errorMessage = 'Devi inserire un valore numerico';
    alert(errorMessage);
} else if ((distance <= 0) || (age <= 0)) { // Caso: valori inseriti uguali a 0 o negativi
    errorMessage = 'Il valore inserito non può essere infiriore o uguale a 0';
    alert(errorMessage);
} else if (age > 100) { // Caso: l'età inserita è troppo alta
    errorMessage = 'Età massima consentita = 100';
    alert(errorMessage);
} else {  // Caso: i valori inseriti sono validi
    const fullPrice = 0.21 * distance;
    let finalPrice = fullPrice;
    if (age < 18) {
        finalPrice *= 0.8;
    } else if (age > 65) {
        finalPrice *= 0.6;
    }
    console.log(`Il prezzo finale è: ${finalPrice.toFixed(2)}€`);
    showElement.innerHTML = `Il prezzo finale è: <strong>${finalPrice.toFixed(2)}€</strong>`;
}

