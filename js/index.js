function toogle(element) {
  if (element.style.opacity === "" || element.style.opacity === '0') {
    element.style.opacity = '1';
  } else {
    element.style.opacity = '0';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  transformicons.add('.tcon');

  var menuButton = document.getElementsByClassName('tcon')[0];
  var navbar = document.getElementsByClassName('navbar')[0];
  menuButton.addEventListener('click', function (event) {
    toogle(navbar);
  });
});
