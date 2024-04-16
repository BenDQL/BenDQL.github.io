// console.log("hello again");
// let city = prompt("what is this city called");
// console.log("this city is", city);

// let assignment1 = "20"
// let assignment2 = "30"
// let assignment3 = "20"

// let total = assignment1 + assignment2 + assignment3;
// console.log("my total score is", total)

// let total =
// parseInt(assignment1) + parseInt(assignment2) + parseInt(assignment3);
// console.log("my total score is", total)

// let student =["Rohit", "Ben", "Jack"]
// console.log(student[2])

// let studentRecord =[{name:"Jack", id:1}, {name:"Ben", id:2}, {name:"Mars", id:3}]
// console.log(studentRecord )
// let temperature =19;

// let temperature = prompt("What is the outside temperature")

function checkWeather() {
  let body = document.querySelector("body");
  let temp = document.querySelector("#temperature");
  let temperature = temp.value;
  if (temperature >= 10 && temperature < 20) {
    console.log("it feel cold");
    body.style.backgroundColor = "lightblue";
  } else if (temperature >= 20 && temperature < 30) {
    console.log("it feel warm and sunny");
    body.style.backgroundColor = "yellow";
  } else if (temperature < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "blue";
  } else if (temperature > 30) {
    console.log("it is freezing");
    body.style.backgroundColor = "red";
  }
}
