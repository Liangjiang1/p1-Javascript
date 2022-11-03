let budget = 100;

let product = prompt("hoeveel kost het product")

let h1 = document.getElementById("uitkomst");

if (budget > product){ 
console.log("ik heb genoeg geld");
h1.innerText="ik heb genoeg geld"
h1.style.color = "green";
} else{
console.log("ik heb niet genoeg geld");
h1.innerText="ik heb niet genoeg geld"
h1.style.color = "red";
}



