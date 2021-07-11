function initMenuHide() {
  let page = window.pageYOffset;
  const header = document.querySelector('.header');


  window.onscroll = () => {
    let page2 = window.pageYOffset;
    if (page < page2) {
      header.classList.add('onScroll');
    }
    else {
      header.classList.remove('onScroll');
    }
    page = page2;
  }
}

initMenuHide();


