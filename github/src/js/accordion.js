const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
  accordion.addEventListener('click', function() {
    const accordionActive = document.querySelectorAll('.accordion-active'),
          target = this,
          targetActive = target.querySelector('.accordion-active');
    accordionActive.forEach(accordion => {
      accordion.classList.remove('active');
    });
    targetActive.classList.add('active');
  });
});