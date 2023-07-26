FC.addEventListener('initialize', ({ options, device }) => {
  utils.scale(document.body, 1920, 1080);

  if (options.message != null && options.message != '') {
    document.getElementById('message').src = options.message;
  }

  FC.initialized();
});
