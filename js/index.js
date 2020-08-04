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
    }else {
        console.log('hit Tab...give it a try')
    }
})

window.onload = (event) => {
    console.log('You are currently viewing the whole page')
}

// const navBar = document.querySelector('.nav')
// navBar.addEventListener('dblclick', (event) => {
//     event.target.font = 'Rowdies'
//     event.target.
    
// })

const destinationImg = document.querySelector('.content-destination img')
destinationImg.addEventListener('dblclick', (event) => {
    event.target.style.visibility = 'hidden'
    console.log('double click')
})