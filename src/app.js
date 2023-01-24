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

        if (palos[indexPalo] === "♦" || palos[indexPalo] === "♥") {
          document.getElementById(
            "hasCards"
          ).innerHTML += `<div class="card col-4" style="width: 12rem; height: 16rem;">
                          <div class="card-body">
                            <div class="top text-danger">${palos[indexPalo]}</div> <div class="number text-danger">${numbers[indexNum]}</div> <div class="bottom text-danger">${palos[indexPalo]}</div>
                            </div>
                          </div>`;
        } else {
          document.getElementById(
            "hasCards"
          ).innerHTML += `<div class="card col-4" style="width: 12rem; height: 16rem;">
            <div class="card-body">
              <div class="top">${palos[indexPalo]}</div> <div class="number">${numbers[indexNum]}</div> <div class="bottom">${palos[indexPalo]}</div>
            </div>
          </div>`;
        }
      }
    }
  }
  const element2 = document.getElementById("sortButton");
  element2.addEventListener("click", sortCards);

  function sortCards(sort) {
    console.log(sort);
    let wall = sort.length - 1; //we start the wall at the end of the sort array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (sort[index[2]] > sort[(index + 1)[2]]) {
          let aux = sort[index];
          sort[index] = sort[index + 1];
          sort[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall
    }
    console.log(sort);
    return sortCards;
  }
};
