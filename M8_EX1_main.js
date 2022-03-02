import { Ordenador } from "./M8_EX1_ordenador.js";
let pcComputer1;
let pcComputer2;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
// const ramButton=document.getElementById("ramButton")
// const ramInput=document.getElementById("ramInput").value
button1.addEventListener("click", () => firstComputer());
button2.addEventListener("click", () => secondComputer());

//ramButton.addEventListener("click",()=>ram(ramInput))

function crearOrdenadors() {
  let brand = prompt("ingrese la marca");
  let model = prompt("ingrese el modelo");
  let processor = prompt("ingrese el procesador");
  let ram = prompt("ingrese la memoria RAM");
  let capacity = prompt("ingrese la capacidad de almacenamiento");

  return new Ordenador(brand, model, processor, ram, capacity);
}
function firstComputer() {
  alert(`ingrese los datos del primer ordenador`);
  pcComputer1 = crearOrdenadors();
  debugger;
  document.getElementById(
    "result1"
  ).textContent = `Ordenador 1 Ingresado con éxito`;
  console.log(pcComputer1);
  return pcComputer1;
}
function secondComputer() {
  alert(`ingrese los datos del segundo ordenador`);
  pcComputer2 = crearOrdenadors();
  debugger;
  document.getElementById(
    "result1"
  ).textContent = `Ordenador 2 Ingresado con éxito`;
  console.log(pcComputer2);
  return pcComputer2;
}
// function ram(input) {
//   pcComputer1.setRam(input);
//   console.log(pcComputer1);
// }
