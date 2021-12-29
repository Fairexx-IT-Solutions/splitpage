const main = document.querySelector('.container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const split = document.querySelector('.split')

left.addEventListener('mouseenter', () => main.classList.add('hover-left'));

left.addEventListener('mouseleave', () => main.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=> main.classList.add('hover-right'));

right.addEventListener('mouseleave',()=> main.classList.remove('hover-right'));

