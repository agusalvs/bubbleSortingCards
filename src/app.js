/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let numberOfCards = "perro";

  const element = document.getElementById("drawButton");
  element.addEventListener("click", tantasCartitas);

  function tantasCartitas() {
    let inputValue = document.getElementById("drawInput").value;
    if (inputValue === "") {
      alert("You have not entered any number, we will draw cards for you");
      numberOfCards = Math.ceil(Math.random() * 8);
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
    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNum = Math.floor(Math.random() * numbers.length);
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let sort = [[numbers[indexNum]], [values[indexNum]]];
    // console.log(sort);

    for (let i = 1; i <= numberOfCards; i++) {
      let indexPalo = Math.floor(Math.random() * palos.length);
      let indexNum = Math.floor(Math.random() * numbers.length);

      let data = [[palos[indexPalo]], [numbers[indexNum]], [values[indexNum]]];
      sort.push(data);
      console.log(sort);

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
