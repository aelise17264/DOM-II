// Your code goes here
let topImage = document.querySelector('img')
function zoom(event){
    event.preventDefault()

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 2);

    topImage.style.transform = `scale(${scale})`;
}

let scale = 1;

topImage.addEventListener('wheel', zoom);

let title = document.querySelector('h1')
title.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
        
    setTimeout(() => {
        event.target.style.color = 'orange'
    }, 1000)
})

let wholePage = document.querySelector('html')
wholePage.addEventListener('keydown', event => {
    if(event.key === 'Tab'){
        event.target.style.background = '#86c4ba'
        console.log('make it blue')
    }else {
        console.log('hit Tab...give it a try')
    }
})

window.onload = (event) => {
    console.log('You are currently viewing the whole page')
}

const destinationImg = document.querySelector('.content-destination img')
destinationImg.addEventListener('dblclick', (event) => {
    event.target.style.visibility = 'hidden'
    console.log('double click')
})

let navBar = document.querySelectorAll('nav a')
navBar.forEach(link => {
    //console.log(link)
    link.addEventListener('mousedown', (event) =>{
        event.target.style.color = 'purple'
        event.target.style.background = 'pink'
        event.preventDefault()
    })
    
})


howTall = 0;
howWide = 0;
function windowSize(){
    howTall = window.innerHeight;
    howWide = window.innerWidth;
    console.log(`height: ${howTall}, width: ${howWide}`)
    
}
window.addEventListener('resize', windowSize)

window.addEventListener('offline', (event) => {
    console.log('The network connection has been lost.');
})

let paragraphs = document.querySelectorAll('.content-pick p')
console.log(paragraphs)
paragraphs.forEach(para => {
para.addEventListener('mouseenter', (event) => {
    event.target.style.border = '5px dotted black'
})
para.addEventListener('mouseleave', (event) =>{
    event.target.style.border = '3px solid blue'
})
})

Array.from(document.all).forEach(element => {
    element.addEventListener('keypress', (event) => {
    console.log (event.target)
    console.log(event.currentTarget)
    event.stopPropagation()
    })
})