const one = document.querySelector(".one-number");
const five = document.querySelector(".five-number")
let counter = 0;
const ul = document.querySelector("ul")
const min = 1;
const max = 100;

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

one.addEventListener("click", function newOneLi()
{
    if(counter < 1){ 
    counter++
    var li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(getRandomArbitrary(min, max)))
    }
})

five.addEventListener("click", function() {
    if(counter < 1){ 
    for(i=0; counter<5; counter++)
    {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(document.createTextNode(getRandomArbitrary(min, max)))
    }}
})
