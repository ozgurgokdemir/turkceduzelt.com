import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { ParaphraserContext, postParaphraser } from '@/features/paraphraser';

function useParaphraser() {
  const paraphraser = React.useContext(ParaphraserContext);

  if (!paraphraser) {
    throw new Error('useParaphraser must be used within a ParaphraserProvider');
  }

  const mutation = useMutation({
    mutationFn: postParaphraser,
    onSuccess: paraphraser.setResult,
  });

  return { ...paraphraser, mutation };
}

export default useParaphraser;
