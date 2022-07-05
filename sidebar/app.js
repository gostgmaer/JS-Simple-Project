const togg = document.querySelector('.sidebar-toggle')
const togglinks = document.querySelector('.sidebar')
const clossBtn = document.querySelector('.close-btn')


togg.addEventListener('click',function(){
  

    togglinks.classList.toggle('show-sidebar')
})

clossBtn.addEventListener('click',function(){
    togglinks.classList.remove('show-sidebar')
})