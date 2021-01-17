function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');

  button.addEventListener('click', () => {

    if (text.hidden == false) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }

  });
}
