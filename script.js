// Step1: Check the link CSS-html
// console.log('hello')

// Step2: variable declaration
var btnLike = document.querySelectorAll('.btn-like');
var like = document.querySelectorAll('.like');
var btnPlus = document.querySelectorAll('.btn-plus');
var btnMinus = document.querySelectorAll('.btn-moins');
var del = document.querySelectorAll('.btn-delete');

// Step3: Events

// Like a product
for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener('click', function () {
    if (like[i].style.fill == 'rgb(45, 163, 69)') like[i].style.fill = 'black';
    else like[i].style.fill = 'rgb(45, 163, 69)';
  });
}

// Add quantity
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener('click', function () {
    if (btnPlus[i].previousElementSibling.innerText < 10)
      btnPlus[i].previousElementSibling.innerText++;
    total();
  });
}

// Dimune quantity
for (let i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener('click', function () {
    if (btnMinus[i].nextElementSibling.innerText > 1)
      btnMinus[i].nextElementSibling.innerText--;
    total();
  });
}

// Calculate the total price
function total() {
  var quantity = document.querySelectorAll('.quantity');
  var prixItem = document.querySelectorAll('.prx');
  var prixTotal = document.getElementById('prix-total');
  var sum = 0;

  for (let i = 0; i < quantity.length; i++) {
    sum += quantity[i].innerText * prixItem[i].innerText;
  }

  prixTotal.innerText = sum;
}

total();

//Delete a product

//var item = document.querySelectorAll('.item');

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener('click', function () {
    //item[i].remove();
    del[i].parentElement.parentElement.remove();
    total();
  });
}
