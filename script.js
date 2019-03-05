window.onscroll = function() {scrollFunction()};

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

function background() { setTimeout(function() {back()}, 200)
                      }
function back() {
  let bolas = document.getElementsByClassName('textS');
  for (let o = 0;o<bolas.length;o++){
    bolas[o].style.backgroundSize = '100% 100%';
  }
};

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none'
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