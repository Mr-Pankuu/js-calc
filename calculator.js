//Calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    console.log(display.value, typeof(display.value))
    if(display.value == "Error") {
        clearDisplay();
    }

    if ((display.value ).length < 10) {
        display.value += input;
    }
}


function clearDisplay(){
    display.value = "";
}


function calculate(){
    try{
        // eval to taking care of all arithmatic operation
        display.value = eval(display.value); 
    }
    catch(error){
            display.value = "Error"
    }
}


function deleteFromDisplay(){ // Using slicing to cut the last string 
    display.value = display.value.slice(0,(length-1));
}