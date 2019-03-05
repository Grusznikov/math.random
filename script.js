const one = document.querySelector(".one-number");
const ul = document.querySelector("ul")
const min = 1;
const max = 100;
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
one.addEventListener("click",function newLi()
{
    var li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(getRandomArbitrary(min, max)))
})