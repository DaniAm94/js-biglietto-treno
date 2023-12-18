# Calcolo del prezzo del biglietto del treno
## cartella/repo js-biglietto-treno
- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
    2. va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    3. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). **Questo richiederà un minimo di ricerca.**

### Scaletta
- Chiedere al passeggero kilometri da percorrere e la sua età salvandoli in una variabile.
- Calcolare il prezzo base del biglietto.
- Calcolare il prezzo scontato se richiesto (età < 18; età > 65).
- Apprissimare il risultato a massimo 2 cifre decimali.
- Mostrare il risultato finale con un apposito messaggio
- Effettuare validazioni varie per controllare gli input dell'utente