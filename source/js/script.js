let headerIndex = document.querySelector('.header__index');
let headerToggle = document.querySelector('.header__toggle');

headerIndex.classList.remove('header__index--nojs');

headerToggle.addEventListener('click', function () {
  if (headerIndex.classList.contains('header__index--closed')) {
    headerIndex.classList.remove('header__index--closed');
    headerIndex.classList.add('header__index--opened');
  } else {
    headerIndex.classList.add('header__index--closed');
    headerIndex.classList.remove('header__index--opened');
  }
});
