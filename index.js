let currentValue=[]

let equal = document.querySelector(".equal")
let onScreen = document.querySelector(".answer")
let displayValue ;

function storeThisValue(value){      
    
    currentValue.push(value)
    console.log(currentValue) 
    displayCounter()    
}
function displayCounter(){
    let value = " " ; 
    for(let i = 0;  i < currentValue.length; i++){
    
    value = value + currentValue[i]
}
console.log(value)
onScreen.textContent = value;
}
function answer(){
    if (currentValue[1] == "+"){
        let sum = parseInt(currentValue[0])+parseInt(currentValue[2])
        console.log(sum)
        onScreen.textContent = sum
    }
    else if (currentValue[1] == "-"){
        let sub = parseInt(currentValue[0])-parseInt(currentValue[2])
        console.log(sub)
        onScreen.textContent = sub
    }
    else if (currentValue[1] == "/"){
        let div = parseInt(currentValue[0])/parseInt(currentValue[2])
        console.log(div)
        onScreen.textContent = div
    }
    else if (currentValue[1] == "*"){
        let mul = parseInt(currentValue[0])*parseInt(currentValue[2])
        console.log(mul)
        onScreen.textContent = mul
    }
}
function reset(){
    currentValue =[]
    onScreen.textContent = " "
}
