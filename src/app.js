/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
};
// EXCUSAS
let generateExcuse = () => {
  let who = ["El perro", "Mi hermana", "Su conejo", "Mi cocodrilo"];
  let action = ["comió", "cedio", "aplasto", "rompio"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
    "despues de clases.",
    "justo a tiempo.",
    "cuando terminé.",
    "durante mi cena.",
    "mientras estaba en el baño."
  ];

  let getRandomInt = Math.floor(Math.random() * who.length);
  let getRandomAct = Math.floor(Math.random() * action.length);
  let getRandomWhat = Math.floor(Math.random() * what.length);
  let getRandomWhen = Math.floor(Math.random() * what.length);

  return (
    who[getRandomInt] +
    " " +
    action[getRandomAct] +
    " " +
    what[getRandomWhat] +
    " " +
    when[getRandomWhen]
  );
};

// Created by NeoClean
