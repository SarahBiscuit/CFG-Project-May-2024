const myButton = document.getElementById("submit");

const newInputArray = [];

function addInput() {
const inputValue = document.getElementById("email").value;
 newInputArray.push(inputValue);  
 console.log(newInputArray);
 return false;
};

myButton.addEventListener("click", addInput);