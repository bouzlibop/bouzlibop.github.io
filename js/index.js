function toogleWidth(element) {
  if (+element.style.width.slice(0, -1) > 0) {
    element.style.width = '0%';
  } else {
    element.style.width = '100%';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  transformicons.add('.tcon');
  var menuButton = document.getElementsByClassName('tcon')[0];
  var navbar = document.getElementsByClassName('navbar')[0];
  menuButton.addEventListener('click', function (event) {
    toogleWidth(navbar);
  });
});
