// Create a empty array to store the names here 
let names = []

// create a function that can add names to the array and print it in the list here 
function addNames(){
let inputVal = document.getElementById("name").value;
names.push(inputVal);
[inputVal].forEach(element => {   
document.getElementById("namesList").innerHTML += "<li>" + element + "</li>"   
}
);
console.log(names);
}

// create a function that can remove the last name from the array and print it in the list here 
function removeNames() {
names.pop();
let remover = document.getElementById("namesList");
remover.removeChild(remover.lastChild);
console.log(names);
}
  
