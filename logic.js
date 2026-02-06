var screen = document.querySelector(".screen");
screen.innerText = 0;
screen.style.fontSize = "2em"
screen.style.color = "azure"
screen.style.alignContent = "center"
screen.style.textAlign = "right"

let btn = document.querySelectorAll(".number")
let expression="";
let value=""
let arr=[]
function evaluate(expression){
  let numberstring=expression;
  for(let i=0;i<=length.numberstring;i++){
    if(numberstring[i]=="+"){
      let parts=numberstring.split(numberstring[i],2);
      console.log(parts);
    }
  }
  // for(let i=0;i<=length.numberstring;i++)
  // {
  //     if(i=="+")
  //     {
  //       let parts=numberstring.split("+",2)
  //       console.log(parts[0],parts[1])
  //     }
  //   }

}
btn.forEach(btn=>{
  btn.addEventListener("click",()=> {
    expression=expression+btn.innerText
    screen.innerText=expression
    if(btn.innerText=="="){
      screen.innerText=""
      evaluate(expression)
    }
    
  })
})

// let screen = document.querySelector(".screen");
// let buttons = document.querySelectorAll(".number");

// screen.innerText = "0";
// screen.style.fontSize="2em"
// screen.style.textAlign="right"
// screen.style.alignContent="center"
// screen.style.color="azure"

// let expression = "";

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     let value = button.innerText;

   
//     if (value === "Ⅹ") value = "*";

//     if (value === "=") {
//       try {
//         let result = eval(expression);
//         screen.innerText = result;
//         expression = result.toString(); 
//       } catch {
//         screen.innerText = "Error";
//         expression = "";
//       }
//       return;
//     }
//     if(value==="C"){
//         expression=" "
//     }
    
//     if (screen.innerText === "0" && "+-*/".includes(value)) {
//       return;
//     }

    
//     if (screen.innerText === "0") {
//       screen.innerText = value;
//       expression = value;
//     } else {
//       screen.innerText += value;
//       expression += value;
//     }
//   });
// });
