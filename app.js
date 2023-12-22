var btn = document.querySelectorAll(".number");
var operate = document.querySelectorAll(".operand")
var display = document.querySelector(".screentwo");
display.innerHTML = '';
var clear = document.querySelector("#clear");
var equal = document.querySelector(".equal");
var remove = document.querySelector("#delete");

for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", (e)=>{
        display.innerHTML += e.target.innerHTML
       
        
    }
)}

for(var i = 0; i<operate.length; i++){
    operate[i].addEventListener("click", (e) => {
        numberOne = parseInt(display.innerHTML)
            var operand = e.target.innerHTML;
            display.innerHTML = '';
            equals(numberOne, operand)
            

            
            
    })
}



function equals(n, operand){
    equal.addEventListener("click", () => {
        var numberTwo = parseInt(display.innerHTML);
        doSomething(n, numberTwo, operand)
        n=0;
        operand = null;
        
    })
}



function doSomething(number, numberTwo, operation){
    console.log("The number is " + number + " and the operand is " + operation);
    
            
            switch(operation){
                case '+':
                    add(number, numberTwo);
                    break;
                case '-':
                    subract(number, numberTwo);
                    break;
                case '/':
                    divide(number, numberTwo);
                    break;
                case 'x':
                    multiply(number, numberTwo);
                    break;
            }
}
        
    


function add(n, n2){
    console.log(n, n2)
    display.innerHTML = n + n2;
    return;
}

function subtract(n, n2){
    display.innerHTML = n - n2;
    return;
}

function divide(n, n2){
    display.innerHTML = n / n2;
    return;
}

function multiply(n, n2){
    display.innerHTML = n * n2;
    return;
}

clear.addEventListener("click", ()=>{
    display.innerHTML = '';
    return;
})

remove.addEventListener("click", ()=>{
    var log = display.innerHTML.split('');
    log.pop();
    var newArray = log.join("");
    display.innerHTML = newArray;
 })






