type PostSummarizerProps = {
  text: string;
  length: number;
};

async function postSummarizer({ text, length }: PostSummarizerProps) {
  const response = await fetch(
    `https://localhost:7256/api/summarizer?length=${length}`,
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

export default postSummarizer;
