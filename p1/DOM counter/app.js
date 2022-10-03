let title = document.getElementById("title");

let count= 0;

let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

function clicker(){ 
    
    count += 1;
    title.innerText = count + " blauw";
     console.log("count");
    document.body.style.backgroundColor = "blue";
   btn.style.backgroundColor = "blue";
}

function clicker2(){

    count -=1;
    title.innerText = count + " rood";
   console.log("count");
   document.body.style.backgroundColor = "red";
   btn2.style.backgroundColor = "red";
}


