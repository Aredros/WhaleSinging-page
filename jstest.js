const rowTextos = document.getElementById("coltitle");
const textos = document.getElementById("coltexto");
const colbarra = document.getElementById("rowcol");
const barra = document.getElementById("phrase");
const boton1 = document.getElementById("buttrans");
const boton2 = document.getElementById("butagain");
let insideTextos = document.createTextNode(
  "A whale would say that in this way:"
);
let nuevoTextos = document.createElement("H2");
let nuevaTrad = document.createElement("H3");

const clickTranslate = () => {
  let userPhrase = document.getElementById("phrase").value;
  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];

  for (let i = 0; i < userPhrase.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (userPhrase[i] === vowels[j]) {
        result.push(userPhrase[i]);
      }
    }
  }
  let stringer = result.join("").toString();
  nuevaTrad.innerHTML = stringer;

  textos.style.display = "none";
  barra.style.display = "none";
  boton1.style.display = "none";
  boton2.style.display = "inline";
  nuevoTextos.style.display = "inline";
  nuevaTrad.style.display = "inline";

  nuevoTextos.appendChild(insideTextos);
  rowTextos.appendChild(nuevoTextos);
  colbarra.appendChild(nuevaTrad);
};

const clickGoBack = () => {
  textos.style.display = "inline";
  barra.style.display = "inline";
  boton1.style.display = "inline";
  boton2.style.display = "none";
  nuevoTextos.style.display = "none";
  nuevaTrad.style.display = "none";
};
