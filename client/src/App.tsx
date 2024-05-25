import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '@/components/layout';
import { EditorProvider } from '@/features/editor';
import { SuggestionsProvider, Duzeltici } from '@/features/suggestions';
import { ParaphraserProvider, Sekillendirici } from '@/features/paraphraser';
import { SummarizerProvider, Ozetleyici } from '@/features/summarizer';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/duzeltici',
        element: <Duzeltici />,
      },
      {
        path: '/sekillendirici',
        element: <Sekillendirici />,
      },
      {
        path: '/ozetleyici',
        element: <Ozetleyici />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditorProvider>
        <SuggestionsProvider>
          <ParaphraserProvider>
            <SummarizerProvider>
              <RouterProvider router={router} />
            </SummarizerProvider>
          </ParaphraserProvider>
        </SuggestionsProvider>
      </EditorProvider>
    </QueryClientProvider>
  );
}

export default App;
