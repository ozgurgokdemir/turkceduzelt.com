import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { postParaphraser } from '@/features/paraphraser';

function useParaphraser() {
  const [document, setDocument] = React.useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: postParaphraser,
    onSuccess: setDocument,
  });

  return { document, setDocument, mutation };
}

export default useParaphraser;
