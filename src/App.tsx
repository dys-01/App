import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import BottomNav from '@/components/BottomNav';
import './index.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="min-h-screen bg-darker text-white">
      <RouterProvider router={router} />
      <BottomNav />
    </div>
  );
}

export default App;
