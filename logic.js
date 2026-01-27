// var screen = document.querySelector(".screen");
// screen.innerText = 0;
// screen.style.fontSize = "2em"
// screen.style.color = "azure"
// screen.style.alignContent = "center"
// screen.style.textAlign = "right"

// let btn = document.querySelectorAll(".number");
// console.log(btn)
// let arr = [];
// let res;
// btn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         console.log("button was clicked");
//         if (screen.innerText == "0") {
//             screen.innerText = btn.innerText;
//             arr.push(btn.innerText);
//             res=btn.innerText;
//         } else {
//             screen.innerText += btn.innerText;
//             arr.push(btn.innerText);

//         }
//     });
// });
// console.log(arr);

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".number");

screen.innerText = "0";
screen.style.fontSize="2em"
screen.style.textAlign="right"
screen.style.alignContent="center"
screen.style.color="azure"

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

   
    if (value === "Ⅹ") value = "*";

    if (value === "=") {
      try {
        let result = eval(expression);
        screen.innerText = result;
        expression = result.toString(); 
      } catch {
        screen.innerText = "Error";
        expression = "";
      }
      return;
    }
    if(value==="C"){
        expression=" "
    }
    
    if (screen.innerText === "0" && "+-*/".includes(value)) {
      return;
    }

    
    if (screen.innerText === "0") {
      screen.innerText = value;
      expression = value;
    } else {
      screen.innerText += value;
      expression += value;
    }
  });
});
