
function loaded() {
    document.getElementById('landing').style.WebkitAnimationName = "land"; // Code for Chrome, Safari, and Opera
  document.getElementById("landing").style.animationName = "land";
};




window.onscroll = function() {scrollFunction(), background()};

function scrollFunction() { let cubos = document.getElementsByClassName("cube");
  if (document.body.scrollTop >= document.body.clientHeight || document.documentElement.scrollTop >= document.documentElement.clientHeight) {
       
  for (let o = 0;o<cubos.length; o++){
  
  cubos[o].style.opacity = "1";
};
  document.getElementById('cube1').style.transform = 'rotate(180deg)';
    document.getElementById('cube2').style.transform = 'rotate(-134.5deg)';
setInterval(timer(), 1000)
  }
    else {
          for (let o = 0;o<cubos.length; o++){
  
  cubos[o].style.opacity = "0";
};
         document.getElementById('cube1').style.transform = 'rotate(0deg)';
    document.getElementById('cube2').style.transform = 'rotate(0deg)';
  document.getElementById('test').style.opacity = '0';
        document.getElementsByClassName('selfColor1').style.backgroundSize = "0% 0%"
  }
}

function timer() {document.getElementById('test').style.opacity = '1'};

function background() { 
  if (document.body.scrollTop >= document.body.clientHeight*2 || document.documentElement.scrollTop >= document.documentElement.clientHeight*2)
  {setTimeout(function() {back()}, 200)}
    else {  
    setTimeout(function() {unback()}, 200)
    }
                      }
function back() {
  let bolas = document.getElementsByClassName('textS');
  for (let o = 0;o<bolas.length;o++){
    bolas[o].style.backgroundSize = '100% 100%';
  }
};
function unback() {
  let bolas = document.getElementsByClassName('textS');
  for (let o = 0;o<bolas.length;o++){
    bolas[o].style.backgroundSize = '0 0';
  }
};

function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.addEventListener('keydown', slide)
alert("Use left and right arrow if you wish to switch the image or use esc to escape")  
  }  
  function slide (e) {
    switch(e.key){
      case 'ArrowLeft'  : addSlide(-1)
      break;
      case 'ArrowRight' : addSlide(+1)
      break;
      case 'Escape' : closeModal()
      break;
    }
  }


function closeModal() {
  document.getElementById('myModal').style.display = 'none'
  document.removeEventListener('keydown', slide)
};

var slides = document.getElementsByClassName("slide");

var slideIndex = 1;
slider(slideIndex);
function addSlide(n) {
  slider(slideIndex += n)
};
function currentSlide(n) {
  slider(slideIndex = n)
}
function slider(n) {
let i;  
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i <slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex-1].style.display = 'block'
}

function goodbye() {
    alert("You're now being taken to my github profile, checkout my works and contact me with my public email if you're interested")
};

