
 let input1 = document.getElementById("input1")
 let input2 = document.getElementById("input2")
 let title = document.getElementById("title")
 
 
 
 function devide(){
    let answer = input1.value / input2.value
    title.innerText = answer;
}

function multiply(){
    let answer = input1.value * input2.value
    title.innerText = answer;
    
}

function add(){
    let answer = Number(input1.value) + Number(input2.value)
    title.innerText = answer;

}

function minus(){
    let answer = input1.value - input2.value
    title.innerText = answer; 

}