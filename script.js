const one = document.querySelector(".one-number");
const five = document.querySelector(".five-number")
const ul = document.querySelector("ul")
const min = 1;
const max = 100;
let counter = 0;

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

one.addEventListener("click", function newOneLi()
{
    if(counter < 1)
{ 
    counter++
    counter == 0;
    var li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(getRandomArbitrary(min, max)))
}})

five.addEventListener("click", function() {
    if(counter < 1){ 
        counter == 0;
    for(i=0; counter<5; counter++)
    {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(document.createTextNode(getRandomArbitrary(min, max)))
    }}
})
