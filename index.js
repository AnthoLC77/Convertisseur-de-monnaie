let btn = document.getElementById("btn");
let input = document.getElementById("input");
let displayResult = document.querySelector(".result");

const convertisseur = (montantUser) => {
  let tauxDeChange = 0.93;
  displayResult.textContent = "";

  if (!isNaN(montantUser)) {
    let result = (montantUser * tauxDeChange).toFixed(2);
    displayResult.textContent = `Pour ${montantUser} dollar vous aurez   
                              ${result}
                               euros`;
  } else {
    displayResult.textContent = `Impossible de convertir des lettres`;
  }

  input.value = "";
};

btn.addEventListener("click", () => {
  convertisseur(input.value);
});
