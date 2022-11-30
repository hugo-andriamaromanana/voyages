/* ##### FOOD ##### */

let firstmenu = document.getElementById('firstmenu');
let secondmenu = document.getElementById('secondmenu');
let thirdmenu = document.getElementById('thirdmenu');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    firstmenu.style.top = value * 0.06 + 'px';
    secondmenu.style.bottom = value * 0.07 + 'px';
    thirdmenu.style.top =  value * 0.08 + 'px';
})

/* ##### END FOOD ##### */

/* ##### Cities ##### */

const content = document.querySelectorAll('.blank-country');
const tab = document.querySelectorAll('.blank-link');
const slider = document.querySelector('.blank-countries-slider');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('blank-active');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('blank-active');
}


hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
})

/* ##### END Cities ##### */