const togg = document.querySelector('.nav-toggle')
const togglinks = document.querySelector('.links')


togg.addEventListener('click',function(){
    // console.log(togglinks.classList.contains('random'));
    // if (togglinks.classList.contains('show-links')) {
    //     togglinks.classList.remove('show-links')
    // }else{
    //     togglinks.classList.add('show-links')
    // }

    togglinks.classList.toggle('show-links')
})