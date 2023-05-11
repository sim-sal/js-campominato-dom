// seleziono il container dove verranno create tutte le griglie
const gridElement = document.querySelector(".main-container");
console.log(gridElement);

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

            // gestisco l'evento al click di ogni quadrto
            newSquare.addEventListener('click',

                function() {
                    newSquare.classList.add("square-clicked");
                    console.log("il numero della cella selezionata è: " + i);

                    if (i === bombsArray) {
                        newSquare.classList.add("square-bomb");
                        alert("Hai beccato una bomba! Hai perso!");
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
    