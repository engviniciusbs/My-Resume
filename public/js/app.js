/*======================NODEMAILER=========================*/

const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  let formData = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    //console.log(xhr.responseText);
    if(xhr.responseText == 'sucess'){
      let formSuccessMessage = document.getElementById('form-success-message');
      formSuccessMessage.classList.remove('is-hidden');
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      let formDangerMessage = document.getElementById('form-danger-message');
      formDangerMessage.classList.remove('is-hidden');
    }
  }

  xhr.send(JSON.stringify(formData));

})

const exitContactForm = document.querySelector('body > section > div > div > div.column.is-9 > div > div > div > form > div.field.is-grouped > div:nth-child(2) > button');

exitContactForm.addEventListener('click', (e)=>{
  e.preventDefault();
  window.location.replace('/index.html');
});