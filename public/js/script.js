document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
  
      const target = el.dataset.target;
      const $target = document.getElementById(target);
  
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
  
    });
  });
  
});

document.addEventListener('DOMContentLoaded', () => {

	let cardToggles = document.getElementsByClassName('card-header-icon');

	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}

});

document.addEventListener('DOMContentLoaded', () => {

	let closeMessageToggles = document.querySelectorAll('.message .delete');

	for (let i = 0; i < closeMessageToggles.length; i++) {
		closeMessageToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.classList.add('is-hidden');
		});
	}

});

document.addEventListener('DOMContentLoaded', () => {

	let mobileCardImage = document.getElementById('resume-image');

	if (window.matchMedia("(max-width: 479px)").matches) {
    mobileCardImage.classList.remove('is-2by3');
    mobileCardImage.classList.add('is-128x128');
  }

});