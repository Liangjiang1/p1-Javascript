let teller = document.getElementById("teller")

let count = 0;

function counter() {

    if (count >= 10) {
        count = 0;
    } else{
        count += 1;
    }
    teller.innerText = count + "x";
}