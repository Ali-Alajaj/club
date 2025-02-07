document.querySelector('.js-hamburger-menu')
  .addEventListener('click', () => {
    document.querySelector('.js-menu')
      .classList.add('visible');
  });

document.querySelector('.remove-menu')
  .addEventListener('click', () => {
    document.querySelector('.js-menu')
      .classList.remove('visible');
  })

document.querySelectorAll('.images-grid img')
  .forEach((img) => {
    img.addEventListener('click', () => {
      document.querySelector('.js-image-displayer')
        .classList.add('visible');
        
      document.querySelector('.js-image-displayer')
        .innerHTML = `<button class="ok">OK</button><img src="${img.classList.value}.jpg">`;
      document.querySelector('.ok')
        .addEventListener('click', () => {
          document.querySelector('.js-image-displayer')
            .classList.remove('visible');
        })
    })
  })