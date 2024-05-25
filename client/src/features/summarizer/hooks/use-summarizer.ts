import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { SummarizerContext, postSummarizer } from '@/features/summarizer';

function useSummarizer() {
  const summarizer = React.useContext(SummarizerContext);

  if (!summarizer) {
    throw new Error('useSummarizer must be used within a SummarizerProvider');
  }

  const mutation = useMutation({
    mutationFn: postSummarizer,
    onSuccess: summarizer.setResult,
  });

  return { ...summarizer, mutation };
}

export default useSummarizer;
