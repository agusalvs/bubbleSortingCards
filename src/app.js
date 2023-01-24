/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let numberOfCards = "algo";
  let sort = [];

  const element = document.getElementById("drawButton");
  element.addEventListener("click", cardsQuantity);

  function cardsQuantity() {
    let inputValue = document.getElementById("drawInput").value;
    if (inputValue === "") {
      alert("You have not entered any number. We will draw cards for you");
      numberOfCards = Math.ceil(Math.random() * 6 + 1);
    } else if (inputValue < 2) {
      alert(
        "To be able to sort cards, there has to be at least 2 of them. We will draw cards for you"
      );
      numberOfCards = Math.ceil(Math.random() * 6 + 1);
    } else if (inputValue > 52) {
      alert("A deck has 52 cards. This request cannot be done");
      numberOfCards = 52;
    } else {
      numberOfCards = inputValue;
    }

    document.getElementById("hasCards").innerHTML = ``;
    randomCard();
  }

  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    // let indexPalo = Math.floor(Math.random() * palos.length);
    // let indexNum = Math.floor(Math.random() * numbers.length);
    // let sort = [[numbers[indexNum]], [values[indexNum]]];
    // console.log(sort);

    // vaciamos sort para que no vaya acumulando cartas de otros mundos
    sort = [];

    for (let i = 1; i <= numberOfCards; i++) {
      let indexPalo = Math.floor(Math.random() * palos.length);
      let indexNum = Math.floor(Math.random() * numbers.length);

      // definimos la carta aleatoria
      let data = [[palos[indexPalo]], [numbers[indexNum]], [values[indexNum]]];

      console.log("data: " + data);
      console.log("sort: " + sort);
      console.log("sort.indexOf(data) " + sort.indexOf(data));
      // sort.push(data);
      // console.log(sort);

      if (sort.indexOf(data) >= 0) {
        i = i - 1;
      } else {
        // metemos la carta en la mano
        sort.push(data);
        // metemos la carta dentro de la pantalla
        let top = document.getElementById("top");
        let number = document.getElementById("number");
        let bottom = document.getElementById("bottom");
        if (indexPalo === 0 || indexPalo === 1) {
          document.getElementById(
            "hasCards"
          ).innerHTML += `<div class="card m-2" style="width: 5rem; heigth:8rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-danger border-0 p-0" id="top">${palos[indexPalo]}</li>
              <li class="list-group-item text-danger border-0 p-0 display-6 text-center" id="number">${numbers[indexNum]}</li>
              <li class="list-group-item text-danger border-0 p-0" style="transform: rotate(180deg)" id="bottom">${palos[indexPalo]}</li>
            </ul>
          </div>`;
        } else {
          document.getElementById(
            "hasCards"
          ).innerHTML += `<div class="card m-2" style="width: 5rem; heigth:8rem">
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-0 p-0" id="top">${palos[indexPalo]}</li>
          <li class="list-group-item border-0 p-0 display-6 text-center" id="number">${numbers[indexNum]}</li>
          <li class="list-group-item border-0 p-0" style="transform: rotate(180deg)" id="bottom">${palos[indexPalo]}</li>
        </ul>
      </div>`;
        }
      }
    }
    return sort;
  }
  // aca se debe retornar el array que contiene los valores de las caryas generadas, que es el declararon arriba: sort

  const elementv2 = document.getElementById("sortButton");
  // elementv2.addEventListener("click", sortCards);
  elementv2.addEventListener("click", function() {
    sortCards([sort]);
  });

  function sortCards(sort) {
    sort = sort[0];
    let wall = sort.length - 1; //we start the wall at the end of the sortay
    document.getElementById("hasCards").innerHTML = ``;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        // extraemos los valores a comparar
        let thing1 = sort[index];
        let thing2 = sort[index + 1];

        // acá es donde las burbujitas suben
        if (parseInt(thing1[2]) > parseInt(thing2[2])) {
          let aux = sort[index];
          sort[index] = sort[index + 1];
          sort[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall
    }
    while (sort.length > 0) {
      // Quitamos la primer carta
      let oneCard = sort[0];
      sort.shift();
      // Ahora ponemos las cartitas en la pantalla
      let top = document.getElementById("top");
      let number = document.getElementById("number");
      let bottom = document.getElementById("bottom");
      let suits = oneCard[0];
      if (suits[0] === "♦" || suits[0] === "♥") {
        document.getElementById(
          "hasCards"
        ).innerHTML += `<div class="card m-2" style="width: 5rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-danger border-0 p-0" id="top">${oneCard[0]}</li>
              <li class="list-group-item text-danger border-0 p-0 display-6 text-center" id="number">${oneCard[1]}</li>
              <li class="list-group-item text-danger border-0 p-0" style="transform: rotate(180deg)" id="bottom">${oneCard[0]}</li>
            </ul>
          </div>`;
      } else {
        document.getElementById(
          "hasCards"
        ).innerHTML += `<div class="card m-2" style="width: 5rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-0 p-0" id="top">${oneCard[0]}</li>
          <li class="list-group-item border-0 p-0 display-6 text-center" id="number">${oneCard[1]}</li>
          <li class="list-group-item border-0 p-0" style="transform: rotate(180deg)" id="bottom">${oneCard[0]}</li>
        </ul>
      </div>`;
      }
    }
  }
};
