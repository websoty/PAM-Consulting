const header = document.getElementById('header-placeholder');
const footer = document.getElementById('footer-placeholder');
const contacts = document.getElementById('contacts-placeholder');
const helpBlock = document.getElementById('helpBlock-placeholder');
const faqSlider = document.getElementById('faq-placeholder');

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

    const helpRes = await fetch('help.html');
      if (!helpRes.ok) throw new Error ('Ошибка при загрузке блока');
        const helpContent = await helpRes.text();
          helpBlock.innerHTML = helpContent;

    const contactsRes = await fetch('contacts.html');
      if (!contactsRes.ok) throw new Error ('Ошибка загрузки блока контакты');
      const contactsContent = await contactsRes.text();
        contacts.innerHTML = contactsContent;

    const faqRes = await fetch('slider-cards.html'); 
      if (!faqRes.ok) throw new Error ('Ошибка загрузки слайдов');
      const faqContent = await faqRes.text();
      faqSlider.innerHTML = faqContent;
      faqSlider.style.background = 'linear-gradient(180deg, #6D31D0, #828CDE)';
      const faqImages = document.querySelectorAll('img');
        faqImages.forEach(img => {
          img.style.maxWidth = '100%';
        });
      slider(); 

  }
  catch(err) {
  console.error('Ошибка', err);
  }
};
  loadHeaderFooter();


// слайдер
function slider() {
  $('.faq__slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  arrows: false,
  slidesToShow: 4, // для экранов >= 1440
  slidesToScroll: 1,
  dots: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1440, // меньше 1440px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 600, // меньше 600px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
  ]
});
};


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


