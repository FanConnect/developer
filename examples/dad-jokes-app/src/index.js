async function fetchQuote() {
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
}

async function updateQuote() {
  const quoteElement = document.querySelector('.quote');
  quoteElement.classList.remove('fade-in');
  const quoteText = await fetchQuote();
  quoteElement.textContent = quoteText;
  quoteElement.classList.add('fade-in');
}

async function run() {
  updateQuote();
  setInterval(updateQuote, 20 * 1000);
}

run();
