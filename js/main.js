const header = document.getElementById('header-placeholder');
const footer = document.getElementById('footer-placeholder');

async function loadHeaderFooter() {
  try {
    const headerRes = await fetch('header.html');
    if (!headerRes.ok) throw new Error ('Ошибка при загрузке хедера');
      const headerContent = await headerRes.text();
        header.innerHTML = headerContent;
        initMenu(); // хедер меню

    const footerRes = await fetch('footer.html')
    if (!footerRes.ok) throw new Error ('Ошибка при загрузке футера');
      const footerContent = await footerRes.text();
        footer.innerHTML = footerContent;
  }
  catch(err) {
  console.error('Ошибка', err);
  }
};
  loadHeaderFooter();



function initMenu () {
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
};


