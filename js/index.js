// Your code goes here

let navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
console.log(navLinks.length)

navLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
       link.style.borderBottom = '1px solid hotpink';
    })
    link.addEventListener('mouseout', (event) => {
        link.style.borderBottom = 'none';
     })
     link.addEventListener('click', (event) => {
         link.style.color = 'purple';
     })
})

let doc = document.documentElement;
doc.addEventListener('keydown', (event) => {
    if (event.keyCode === 83 ) {
        const search = prompt('Search something on this page:');
        console.log(`Searched for ${search}`);
    }
})
window.addEventListener('load', (event) => {
    alert('The page is loaded.');
    console.log('The page is loaded.');
})

const btn = document.querySelectorAll('.btn')
btn.forEach((b) => {
    b.addEventListener('click', (event) => {
        const email = prompt('Enter email address for updates.', 'Enter your email address.');
        console.log(`${email} wants information about Fun Bus!`);
    })
})

const header = document.querySelector('.logo-heading');
header.addEventListener('dblclick', (even) => {
    header.innerHTML = 'Discover below!';
})

const size = (event) => {
    event.preventDefault();
    // debugger;
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 2);
    busImg.style.transform = `scale(${scale})`;
}

let scale = 1;
const busImg = document.querySelector('.bus-img');
busImg.onwheel = size;


