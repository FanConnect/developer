const fetchQuote = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw response;
    }
    const data = await response.json();
    return data.joke;
  } catch (err) {
    console.warn('Unable to load awesome dad jokes!');
    console.warn(err);
  }
};

const updateQuote = async () => {
  const quoteElement = document.querySelector('.quote');
  quoteElement.classList.remove('fade-in');
  const quoteText = await fetchQuote();
  quoteElement.textContent = quoteText;
  quoteElement.classList.add('fade-in');
};

FC.addEventListener('initialize', ({ options, device }) => {
  // utils.scale(document.body, 1920, 1080);

  // For testing for now
  document.body.style.transform = `scaleX(${window.innerWidth / 1920}) scaleY(${
    window.innerHeight / 1080
  })`;

  updateQuote();

  setInterval(updateQuote, 20 * 1000);

  FC.initialized();
});
