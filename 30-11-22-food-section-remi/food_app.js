let firstmenu = document.getElementById('firstmenu');
let secondmenu = document.getElementById('secondmenu');
let thirdmenu = document.getElementById('thirdmenu');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    firstmenu.style.top = value * 0.06 + 'px';
    secondmenu.style.bottom = value * 0.07 + 'px';
    thirdmenu.style.top =  value * 0.08 + 'px';
})