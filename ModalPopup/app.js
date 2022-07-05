const modalBtn = document.querySelector('.modal-btn');
const closebtn = document.querySelector('.close-btn');
const style = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click',function(){
    style.classList.toggle('open-modal')
})




closebtn.addEventListener('click',function(){
    style.classList.remove('open-modal');
})