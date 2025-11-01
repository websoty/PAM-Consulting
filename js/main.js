const header = document.getElementById('header-placeholder');
const footer = document.getElementById('footer-placeholder');
const servicesBlock = document.getElementById('services-placeholder');
const helpBlock = document.getElementById('helpBlock-placeholder');
const contacts = document.getElementById('contacts-placeholder');
const faqSlider = document.getElementById('faq-placeholder');


async function loadHeaderFooter() {
  try {
    const headerRes = await fetch('/pages/fetch-header.html');
      if (!headerRes.ok) throw new Error ('Ошибка при загрузке хедера');
      const headerContent = await headerRes.text();
        header.innerHTML = headerContent;
        initMenu(); // хедер меню

// модалка кнопки get in touch
const touchBtn = document.querySelector('.btn__touch');

touchBtn.addEventListener('click', () => {
  const modalRequest = document.createElement('div');
  modalRequest.classList.add('req-modal');
  modalRequest.innerHTML = `
  <div class="req-content">
  <h5>We’d love to stay in touch — drop your email below!</h5>
  <form><input type="email" placeholder="E-mail" aria-label="email"></form>
  <button class="close">Send</button>
  </div>
  `;
  modalRequest.classList.add('active');
  touchBtn.insertAdjacentElement('afterend', modalRequest);

  const modalReqClose = document.querySelector('.close');

  modalReqClose.addEventListener('click', () => {
    modalRequest.innerHTML = `
      <div class="req-content">
        <h5>Thank You!Your request is being reviewed.</h5>
        <p>One of our team members will get in touch with you soon</p>
      </div>
    `;
    setTimeout(() => {
    modalRequest.remove();
    }, 2500);
  })
});



    const footerRes = await fetch('/pages/fetch-footer.html');
      if (!footerRes.ok) throw new Error ('Ошибка при загрузке футера');
      const footerContent = await footerRes.text();
        footer.innerHTML = footerContent;

    const servicesRes = await fetch('/pages/fetch-services.html');
      if (!servicesRes.ok) throw new Error ('Ошибка загрузки блока сервисы');
        const servicesContent = await servicesRes.text();
          servicesBlock.innerHTML = servicesContent;  

    const helpRes = await fetch('/pages/fetch-help.html');
      if (!helpRes.ok) throw new Error ('Ошибка при загрузке блока');
        const helpContent = await helpRes.text();
          helpBlock.innerHTML = helpContent;

    const contactsRes = await fetch('/pages/fetch-contacts.html');
      if (!contactsRes.ok) throw new Error ('Ошибка загрузки блока контакты');
      const contactsContent = await contactsRes.text();
        contacts.innerHTML = contactsContent;

    const faqRes = await fetch('/pages/slider-cards.html'); 
      if (!faqRes.ok) throw new Error ('Ошибка загрузки слайдов');
      const faqContent = await faqRes.text();
      faqSlider.innerHTML = faqContent;
      faqSlider.style.background = 'linear-gradient(180deg, #6D31D0, #828CDE)';
      const faqImages = document.querySelectorAll('img');
        faqImages.forEach(img => {
          img.style.maxWidth = '100%';
          img.loading = 'lazy';
        });
      slider(); 

  }
  catch(err) {
  console.error('Ошибка', err);
  }
};
  loadHeaderFooter();


$('.swiper').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  slidesToScroll: 1,
  adaptiveHeight: true,
  fade: true,
  cssEase: 'linear',
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

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


