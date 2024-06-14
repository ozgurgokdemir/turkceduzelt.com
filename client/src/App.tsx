import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { AppLayout, AuthLayout } from '@/components/layout';
import { EditorProvider } from '@/features/editor';
import { SuggestionsProvider, Duzeltici } from '@/features/suggestions';
import { ParaphraserProvider, Sekillendirici } from '@/features/paraphraser';
import { SummarizerProvider, Ozetleyici } from '@/features/summarizer';
import { Giris, Kayit } from '@/features/auth';
import { Button } from '@/components/ui';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <main className="grid h-screen w-screen place-items-center">
        <Button variant="filled" tone="brand" size="lg" asChild>
          <Link to="/giris">Giriş yap</Link>
        </Button>
      </main>
    ),
  },
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
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/giris',
        element: <Giris />,
      },
      {
        path: '/kayit',
        element: <Kayit />,
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
