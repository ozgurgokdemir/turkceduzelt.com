type PostParaphraserProps = {
  text: string;
  wording: string;
};

async function postParaphraser({ text, wording }: PostParaphraserProps) {
  const response = await fetch(
    `https://localhost:7256/api/paraphraser?wording=${wording}`,
    {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.text();
}

export default postParaphraser;
