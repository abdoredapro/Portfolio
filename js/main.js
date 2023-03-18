let nav = document.querySelector('nav').clientHeight;
let content = document.querySelector('.interface');
content.style.height = window.innerHeight - nav + 'px';

let textTest = '';
let myWords = 'I am Full Stack Developer, Worked on many large projects, If you want anything contact with me.';

let el = document.querySelector('.myParagraph');
let currrent = 0;
window.onload = function () {

    let typeWriter = setInterval(() => {
        el.textContent += myWords[currrent];
        currrent++;
        if(currrent > myWords.length - 1) {
            clearInterval(typeWriter);   
        }
        
    },100)
}