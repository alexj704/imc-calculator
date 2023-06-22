const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const resultTitle = document.querySelector(".result-title");
const resultText = document.querySelector(".result-text");
let dataImc;
let imc;

function calculImc(height, weight) {
  imc = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
  if (imc < 40) {
    for (let i in BMIData) {
      if (BMIData[i].range[0] <= imc && BMIData[i].range[1] > imc) {
        dataImc = BMIData[i];
      }
    }
  } else {
    dataImc = BMIData[5];
  }
}

function affichageImc(height, weight) {
  if (weight > 0 && height > 0) {
    calculImc(height, weight);
    resultText.textContent = `Résultat: ${dataImc.name}`;
    resultTitle.textContent = imc;
    resultTitle.style.color = dataImc.color;
  } else {
    resultText.textContent = "Merci de remplir correctement les champs";
    resultTitle.textContent = "Whoops";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  affichageImc(height.value, weight.value);
});
