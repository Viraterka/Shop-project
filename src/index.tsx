import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import { ClientsPage } from './pages/clients/ui/ClientsPage';
import { GoodsPage } from './pages/goods/ui/GoodsPage';
import { ShopsPage } from './pages/shops/ui/ShopsPage';
import { Routings } from './shared/routing/routings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: Routings.client.list.path,
        element: <ClientsPage />,
      },
      {
        path: Routings.good.list.path,
        element: <GoodsPage />,
      },
      {
        path: Routings.shop.list.path,
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
