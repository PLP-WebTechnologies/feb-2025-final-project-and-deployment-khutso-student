const react = document.getElementById('Love');
const react1 = document.getElementById('Love1');
const react2 = document.getElementById('Love2');
const react3 = document.getElementById('Love3');


react.addEventListener('click', function() {
    if(react.style.backgroundColor === 'rgb(169, 101, 6)') {
        react.style.backgroundColor = '';
    }else {
        react.style.backgroundColor = 'rgb(169, 101, 6)';
    }
 
})

react1.addEventListener('click', function() {
    if(react1.style.backgroundColor === 'rgb(169, 101, 6)') {
        react1.style.backgroundColor = '';
    }else {
        react1.style.backgroundColor = 'rgb(169, 101, 6)';
    }
 
})

react2.addEventListener('click', function() {
    if(react2.style.backgroundColor === 'rgb(169, 101, 6)') {
        react2.style.backgroundColor = '';
    }else {
        react2.style.backgroundColor = 'rgb(169, 101, 6)';
    }
 
})

react3.addEventListener('click', function() {
    if(react3.style.backgroundColor === 'rgb(169, 101, 6)') {
        react3.style.backgroundColor = '';
    }else {
        react3.style.backgroundColor = 'rgb(169, 101, 6)';
    }
 
})


const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);



// nav link active click
document.querySelector('.navlink-wrapper').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const links = document.querySelectorAll('.navlink-wrapper a');
      links.forEach((link) => link.classList.remove('active'));
      e.target.classList.add('active');
    }
  });


//   mobile menu open menu
  function toggleDiv() {
    var div = document.getElementById('hidden-links');
    div.classList.toggle('closed');
    div.classList.toggle('open');
  };