const container = document.querySelector(".container");


let tailleGrille = 16;
let nombreCase = tailleGrille * tailleGrille;

for (let i = 0; i < nombreCase; i++) {

    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
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



