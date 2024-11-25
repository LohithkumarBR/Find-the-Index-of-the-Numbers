let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() { //when the findBtn is clicked the findIndexOfNumber function is called and executed
    let number = parseInt(userInputEl.value); //access the value provided by the user
    let itemIndex = numbers.findIndex(function(eachItem) { //use the findIndex method to the numbers array 
        //testing function
        if (eachItem === number) { //if the eachItem and number are equal
            return true; //return true
        } else { //else
            return false; //return false
        }
    });
    indexOfNumberEl.textContent = itemIndex; //display the itemIndex
}