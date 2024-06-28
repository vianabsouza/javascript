let scrollElement = document.querySelector('.scroll');
let containerElement = scrollElement.querySelector('.scroll__container');
let childrenElements =  Array.from(containerElement.children);

childrenElements.forEach((item) => {
  let clonedElement = item.cloneNode(true);
  clonedElement.setAttribute('aria-hidden', true);
  containerElement.appendChild(clonedElement);
})