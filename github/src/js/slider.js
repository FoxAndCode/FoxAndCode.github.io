const upArrow = document.querySelector('.testimonials-slider__uparrow');
const downArrow = document.querySelector('.testimonials-slider__downarrow');
let prosent = 0;
upArrow.addEventListener('click', function() {
  const sliders = document.querySelectorAll('.testimonials-slider__item');
  const upDown = 0;
  prosent += 100;
  if (prosent >= upDown) {
    prosent = upDown;
  }
  sliders.forEach(function(slider) {
    slider.style.transform = `translateY(${prosent}%)`;
  });
});
downArrow.addEventListener('click', function() {
  const sliders = document.querySelectorAll('.testimonials-slider__item');
  let maxDown = (sliders.length - 2) * (-100);
  prosent -= 100;
  if (maxDown > prosent) {
    prosent = maxDown;
  }
  sliders.forEach(function (slider) {
    slider.style.transform = `translateY(${prosent}%)`;
  });
});