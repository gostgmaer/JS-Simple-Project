const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");


navToggle.addEventListener('click',function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight =links.getBoundingClientRect().height;

    if (containerHeight===0) {
        linksContainer.style.height=`${linkHeight}px`;
        
    } else {
        linksContainer.style.height=0;
        
    }
    console.log(containerHeight);
    console.log(linkHeight);

})

window.addEventListener('scroll',function(){
    // console.log(this.window.pageYOffset);
    const scrollH = this.window.pageYOffset;
    const navh = navbar.getBoundingClientRect().height;
    if (scrollH>navh) {
        navbar.classList.add('fixed-nav');
        
    }else{
        navbar.classList.remove('fixed-nav');
    }
    if (scrollH>500) {
        topLink.classList.add('show-link')
        
    } else {
        topLink.classList.remove('show-link')
        
    }
   
})

const scrolLinks =document.querySelectorAll('.scroll-links');
scrolLinks.forEach(function(link){
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
    
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
    
        if (!fixedNav) {
          position = position - navHeight;
        }
        if (navHeight > 82) {
          position = position + containerHeight;
        }
    
        window.scrollTo({
          left: 0,
          top: position,
        });
        // close
        linksContainer.style.height = 0;

    })
})