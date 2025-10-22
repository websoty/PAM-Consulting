const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    let formValid = true;

  Array.from(form).forEach(input => {
    const val = input.value.trim();
    let valid = true;
    
    if (input.type === 'text') {
      valid = /^[A-Za-z\s]+$/.test(val);
    } else if (input.type === 'email') {
      valid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(val);
    } else if (input.type === 'tel') {
      valid = /^\+?\d+$/.test(val);
    }

    if (!valid) {
      formValid = false;
      input.style.border = '2px solid red';
      input.style.transition = '.3s ease-out';
      input.style.transform = 'scale(1.05)';
      setTimeout(() => input.style.transform = 'scale(1)', 500);
    } else {
      input.style.border = '';
      input.style.transform = 'scale(1)';
    }
  });

  const checkbox = document.querySelector('#form__checkbox-check');
  const box = checkbox.nextElementSibling; // <span class="custom__checkbox">

    if  (!checkbox.checked) {
      formValid = false;
      box.style.outline = '2px solid red';
      box.style.transition = '.3s ease-out';
      box.style.transform = 'scale(1.1)';
      setTimeout(() => box.style.transform = 'scale(1)', 500);
    } else {
      box.style.outline = '';
      box.style.transform = 'scale(1)';
    }

  if (formValid) {
    const successMsg = document.createElement('div');
    successMsg.classList.add('send');
    successMsg.innerHTML = `<div class="successMsg">
    <p>Thank you! Your form has been submitted! 🎉</p>
    <button class="successMsg__close">Close</button>
    </div>
    `;
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.classList.add('active'), 100);

successMsg.querySelector('.successMsg__close').addEventListener('click', () => {
  successMsg.remove();
  form.reset();
});

  };

})