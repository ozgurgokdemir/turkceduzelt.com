async function postSuggestions(text: string) {
  const response = await fetch('https://localhost:7256/api/completions', {
    method: 'POST',
    body: JSON.stringify(text),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export default postSuggestions;
