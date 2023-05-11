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
                }
 
            )

        }

    }

)















// FUNZIONI
function createGridSquare(tagType , classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}