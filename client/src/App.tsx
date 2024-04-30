import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EditorProvider } from '@/features/editor';
import { SuggestionsProvider, Duzeltici } from '@/features/suggestions';
import { AppLayout } from '@/components/layout';
import { Sekillendirici } from '@/features/paraphraser';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/duzeltici',
    element: (
      <AppLayout>
        <Duzeltici />
      </AppLayout>
    ),
  },
  {
    path: '/sekillendirici',
    element: (
      <AppLayout>
        <Sekillendirici />
      </AppLayout>
    ),
  },
  {
    path: '/ozetleyici',
    element: (
      <AppLayout>
        <div>Özetleyici</div>
      </AppLayout>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditorProvider>
        <SuggestionsProvider>
          <RouterProvider router={router} />
        </SuggestionsProvider>
      </EditorProvider>
    </QueryClientProvider>
  );
}

export default App;
