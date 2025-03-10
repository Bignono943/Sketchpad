const container = document.querySelector(".container");

const square = document.createElement("canvas");

square.width = 600;  
square.height = square.width;
container.appendChild(square);

context = square.getContext("2d");
context.lineWidth = 2;

let tailleGrille = 16;
let tailleCase = square.width / tailleGrille;



for (let i = 0; i < tailleGrille; i++) {
    for (let j = 0; j < tailleGrille; j++) {
        context.strokeRect(i * tailleCase, j * tailleCase, tailleCase, tailleCase);
    }


}

const couleurs = ["green", "blue", "red", "orange", "purple", "magenta", "yellow"];


const couleurRandom = () => {

    const randomIndex = Math.floor(Math.random() * couleurs.length);
    return couleurs[randomIndex];
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
square.addEventListener("mousemove", (e) => {

    e.target.style.backgroundColor = couleurRandom();
})
});

console.log(couleurRandom());



