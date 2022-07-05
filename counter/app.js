
const decress = document.querySelector('#decress');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const counter = document.querySelector('#counter')

let btns = document.querySelectorAll('.btn')

let count = 0


btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if (styles.contains('decress')) {
            count--;

        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            counter.style.color = "green";
        }
        if (count < 0) {
            counter.style.color = "red";
        }
        if (count === 0) {
            counter.style.color = "#222";
        }
        counter.textContent = count;

    })
})


decress.addEventListener('click', function () {
    // console.log(Math.floor((Math.random()*10 )));
    // return Math.floor((Math.random()*10 )+1);
    // counter.textContent= Math.floor((Math.random()*10 )+1);
})
reset.addEventListener('click', function () {

})
increase.addEventListener('click', function () {

})