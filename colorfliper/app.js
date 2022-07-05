const colors = ["red", "yellow", "green", "violate"];



let btn = document.querySelector('#indexsimple');
const color = document.querySelector('.colors');

btn.addEventListener("click", function () {
    getRandomRgb()
    const randnum =Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=getRandomRgb();
    color.textContent=getRandomRgb();
    console.log(document.body,getRandomRgb());
   

})




function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return `rgb(${r},${g},${b})`;
  }