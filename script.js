const container = document.querySelector(".container");
const head = document.querySelector(".head");

let tailleGrille = 16;
let nombreCase = tailleGrille * tailleGrille;


const change = document.getElementById("change");

const changeButton = document.getElementById("change");
changeButton.addEventListener("click", () => {
  let  choix = parseInt(prompt("Entrez le nombre de carrés souhaité (max. 40) :"))

  if (isNaN(choix) || choix <= 0 || choix > 40) {
    alert("Veuillez entrer un nombre valide entre 1 et 40.");
    return;
  }

  else {
      tailleGrille = choix;
    nombreCase = tailleGrille * tailleGrille;
    grille();
  }

});




const grille = () => {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const tailleCarre = container.offsetWidth / tailleGrille;

    for (let i = 0; i < nombreCase; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.style.width = `${tailleCarre}px`; 
      square.style.height = `${tailleCarre}px`; 

      

      square.addEventListener("mousemove", (e) => {
        e.target.style.backgroundColor = couleurRandom();
      });
  
      container.appendChild(square);
    }
  };



const couleurs = ["green", "blue", "red", "orange", "purple", "magenta", "yellow"];
const couleurRandom = () => {

    const randomIndex = Math.floor(Math.random() * couleurs.length);
    return couleurs[randomIndex];
}


const reset = document.getElementById("reset");

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "white";
  });
});


grille();


console.log(couleurRandom());



