const container = document.querySelector(".container");
const head = document.querySelector(".head");




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

const reset = document.getElementById("reset");

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "white";
  });
});



console.log(couleurRandom());



