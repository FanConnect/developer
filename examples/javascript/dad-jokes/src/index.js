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

const run = async () => {
  updateQuote();
  setInterval(updateQuote, 20 * 1000);
};

run();
