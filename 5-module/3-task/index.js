function initCarousel() {
  const buttonArrowRight = document.querySelector('.carousel__arrow_right'),
    buttonArrowLeft = document.querySelector('.carousel__arrow_left'),
    carouselInner = document.querySelector('.carousel__inner'),
    edgeRightPosition = 3,
    edgeLeftPosition = 0,
    offsetPosition = 1;
  let carouselPosition = 0,
    position = 0;

  function changePosition(offset) {
    carouselPosition = carouselPosition - offset * carouselInner.offsetWidth;
    position = position + offset;
    carouselInner.style.transform = `translateX(${carouselPosition}` + `px)`;
  }

  function displayButton(edgePosition, direction) {
    if (position == edgePosition) {
      direction.style.display = 'none';
    } else {
      buttonArrowRight.style.display = '';
      buttonArrowLeft.style.display = '';
    }
  }

  buttonArrowRight.addEventListener('click', () => {
    changePosition(offsetPosition);
    displayButton(edgeRightPosition, buttonArrowRight);
  });

  buttonArrowLeft.addEventListener('click', () => {
    changePosition(-offsetPosition);
    displayButton(edgeLeftPosition, buttonArrowLeft);
  });

  if (position == edgeRightPosition) {
    buttonArrowRight.style.display = 'none';
  }

  if (position == edgeLeftPosition) {
    buttonArrowLeft.style.display = 'none';
  }

}

