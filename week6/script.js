// const myHeading = document.querySelectorAll("p");
// console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "new paragraph";
// myHeading.style.backgroundColor = "yellow"

// for (let i = 0; i<3; i++) {
//     myHeading[i].textContent = "new" + i;
//     myHeading[i].style.backgroundColor = "yellow";
// }

// myHeading.forEach(changeMe);
// function changeMe(item) {
//     // item.style.backgroundColor = "green"
//     item.classList.add("purple-box")
// }

// const myImage = document.querySelector("#my-image");
// console.log(myImage);
// // myImage.classList.add("suqare");

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", ChooseTopic);

function toggleMe() {
  const myImage = document.querySelector("#my-image");
  //   console.log(myImage);
  console.log(myImage.dataset.catname);
  myImage.classList.toggle("round");
  myButton.textContent = myImage.dataset.catname;
}

function ChooseTopic() {
  const myPara = document.querySelectorAll("p");
  console.log(myPara);
  myPara.forEach(displayTopic);
  function displayTopic(item) {
    if (item.dataset.topic === "game") {
      item.classList.add("purple-box");
    } else if (item.dataset.topic === "sound") {
      item.classList.add("coral-box");
    } else if (item.dataset.topic === "web") {
      item.classList.add("green-box");
    }
  }
}

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am a new heading";
let course = "OART1013";
const myImage = document.querySelector("#my-image");
myTitle.innerHTML = `I am <span class="coral-box"> new ${myImage.dataset.catname}</span>`;

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound() {
  myImage.classList.add("round");
}

function makeItSquare() {
  myImage.classList.remove("round");
}

// let myButton = document.querySelector("#my-button");
// myButton.addEventListener("click", toggleMe);
// let myImg = document.querySelector("#myImage");
// let helloMsg = document.querySelector("#hello");
// myImg.addEventListener("mouseover", addMe);
// myImg.addEventListener("mouseout", removeMe);
// function addMe() {
//   myImg.classList.add("round");
// }
// function removeMe() {
//   myImg.classList.remove("round");
// }
// function toggleMe() {
//   let myName = myImg.dataset.catname;
//   helloMsg.textContent = "Hi I am " + myName;
//   myImg.classList.toggle("round");
// }

// let allParagraphs = document.querySelectorAll("p");
// // allParagraphs.forEach(changeColor);

// function changeColor(item) {
//   //console.log(item);
//   item.style.backgroundColor = "limegreen";
//   // item.textContent = "New text content";
// }
// console.log(allParagraphs);
