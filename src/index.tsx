import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import { ClientsPage } from './pages/clients/ui/ClientsPage';
import { GoodsPage } from './pages/goods/ui/GoodsPage';
import { ShopsPage } from './pages/shops/ui/ShopsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'clients', // Без слеша в начале!
        element: <ClientsPage />,
      },
      {
        path: 'goods',
        element: <GoodsPage />,
      },
      {
        path: 'shops',
        element: <ShopsPage />,
      },
    ],
  },
]);

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
