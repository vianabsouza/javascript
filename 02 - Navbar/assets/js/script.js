function showMobileMenu() {
  let mobileMenu = document.querySelector('.mobile-menu');

  if(mobileMenu.classList.contains('show-mobile-menu')) {
    mobileMenu.classList.remove('show-mobile-menu');
    document.querySelector('.icon').src = "assets/img/menu_white.svg"
  } else {
    mobileMenu.classList.add('show-mobile-menu');
    document.querySelector('.icon').src = "assets/img/close_white.svg"
  }
}