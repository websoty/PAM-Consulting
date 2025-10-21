const menuBtn = document.querySelector('.btn__burger');
const menu = document.querySelector('.nav');
const menuItem = document.querySelectorAll('.nav__item');

menuBtn.addEventListener('click', () => {
  const opened = menu.classList.toggle('show');
  const menuItems = Array.from(menuItem);

  // если меню открыто, то итемы выпадают по очереди
  if (opened) {
    menuItems.forEach((item, i) => {
      setTimeout(() =>{item.classList.add('visible');
      }, i * 250)
    });
  } else {
    menuItem.forEach(item => item.classList.remove('visible'));
  }
});