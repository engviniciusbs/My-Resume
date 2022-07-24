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

document.addEventListener('DOMContentLoaded', function() {

	let cardToggles = document.getElementsByClassName('card-header-icon');

	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}

});