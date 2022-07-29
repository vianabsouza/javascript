function showMobileMenu() {
  let mobileMenu = document.querySelector('.mobile-menu');

  if(mobileMenu.classList.contains('show-mobile-menu')) {
    mobileMenu.classList.remove('show-mobile-menu');
    document.querySelector('.icon').src = "assets/img/menu_icon.svg"
  } else {
    mobileMenu.classList.add('show-mobile-menu');
    document.querySelector('.icon').src = "assets/img/close_menu_icon.svg"
  }
}