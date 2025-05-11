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







   