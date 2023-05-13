// seleziono il container dove verranno create tutte le griglie
const gridElement = document.querySelector(".main-container");
console.log(gridElement);

// dichiaro come variabile globale il punteggio iniziale
let score = 0;

// seleziono il bottone dal quale partirà tutto il processo
let myButton = document.getElementById("mybutton");

// gestisco l'evento al click
myButton.addEventListener('click',

    function(){

        // ad ogni click svuotiamo i quadrati della griglia
        gridElement.innerHTML = "";

        // genero l'array composto da 16 numeri corrispondenti alle bombe richiamando la funzione
        let bombsArray = createBombsArray();
        console.log(bombsArray);

        // genero i quadrati nel container tramite la funzione e il ciclo for
        for (let i = 1; i <= 100; i++){

            // richiamo la funzione
            const newSquare = createGridSquare("div" , "square");

            // appendo i quadrati generati al container
            gridElement.append(newSquare);

            // appendo i valori di i ad ogni quadrato
            newSquare.append(i);

            // gestisco l'evento al click di ogni quadrato
            newSquare.addEventListener('click',

                function() {
                    // aggiungo classe ad ogni quadrato
                    newSquare.classList.add("square-clicked");
                    console.log("il numero della cella selezionata è: " + i);

                    // setto la variabile corrispondente al valore all'interno di ogni quadrato
                    let squareNumber = i;

                    // genero le condizioni per mettere in relazione l'array di bombe con i valori presenti nei quadrati
                    if (bombsArray.includes(squareNumber)) {
                        newSquare.classList.add("square-bomb");
                        
                        // mostriamo il risultato all'utente
                        document.getElementById("punteggio").innerHTML = score;

                        // azzeriamo il punteggio
                        score = 0;

                        // ripuliamo la griglia
                        gridElement.innerHTML = "";

                    }else{
                        score ++;
                        console.log("Il tuo punteggio momentaneo è: " + score);
                    }
                    
                }

 
            )

                

        }

    }

)








// FUNZIONI
// funzione parametrizzata per creare un nuovo tag associato ad una classe
function createGridSquare(tagType , classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}

// funzione per generare numeri random
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// funzione per generare l'array di 16 valori corrispondenti alle bombe
function createBombsArray(){
    let bombNumbers = [];

    while (bombNumbers.length < 16) {
        let randomNumbers = randomNumber(1 , 100);

        if (bombNumbers.indexOf(randomNumbers) === -1) {
            bombNumbers.push(randomNumbers);
        }
    }
    
    return bombNumbers;
    
}
    