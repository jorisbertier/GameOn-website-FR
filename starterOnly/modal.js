let menuburger = document.querySelector('.main-navbar')

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    menuburger.classList.add('menu-burger')
    document.body.classList.add('no-scroll');
  } else {
    x.className = "topnav";
    menuburger.classList.remove('menu-burger')
    document.body.classList.remove('no-scroll'); 
  }
}

function closeMenu() {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
  menuburger.classList.remove('menu-burger');
  document.body.classList.remove('no-scroll');
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1140) {
    closeMenu();
  }
});

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
// close modal form & event

function modalCloseForm(){
  modalbg.style.display = "none";
}
modalClose.addEventListener('click', ()=> {
  modalCloseForm()
})


