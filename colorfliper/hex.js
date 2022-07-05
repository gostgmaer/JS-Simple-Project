const colors = ["red", "yellow", "green", "violate"];



let btn = document.querySelector('#indexhex');
const color = document.querySelector('.colors');

btn.addEventListener("click", function () {
 
    const randnum =Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor='#'+randnum;
    color.textContent='#'+randnum;
    console.log(document.body,randnum);
   

})



