FC.addEventListener('initialize', ({ options, device }) => {
  // utils.scale(document.body, 1920, 1080);

  // For testing for now
  document.body.style.transform = `scaleX(${window.innerWidth / 1920}) scaleY(${
    window.innerHeight / 1080
  })`;

  if (options.message != null && options.message != '') {
    document.getElementById('message').innerHTML = options.message;
  }

  FC.initialized();
});
