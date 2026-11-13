import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import { ClientCreatePage } from './pages/client/ui/ClientCreatePage';
import { ClientEditPage } from './pages/client/ui/ClientEditPage';
import { ClientViewPage } from './pages/client/ui/ClientViewPage';
import { ClientsPage } from './pages/clients/ui/ClientsPage';
import { GoodCreatePage } from './pages/good/ui/GoodCreatePage';
import { GoodEditPage } from './pages/good/ui/GoodEditPage';
import { GoodViewPage } from './pages/good/ui/GoodViewPage';
import { GoodsPage } from './pages/goods/ui/GoodsPage';
import { HomePage } from './pages/home/ui/HomePage';
import { ShopCreatePage } from './pages/shop/ui/ShopCreatePage';
import { ShopEditPage } from './pages/shop/ui/ShopEditPage';
import { ShopViewPage } from './pages/shop/ui/ShopViewPage';
import { ShopsPage } from './pages/shops/ui/ShopsPage';
import { Routings } from './shared/routing/routings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: Routings.good.list.path,
        element: <GoodsPage />,
      },
      {
        path: Routings.good.create.path,
        element: <GoodCreatePage />,
      },
      {
        path: Routings.good.view.path,
        element: <GoodViewPage />,
      },
      {
        path: Routings.good.edit.path,
        element: <GoodEditPage />,
      },
      {
        path: Routings.client.list.path,
        element: <ClientsPage />,
      },
      {
        path: Routings.client.create.path,
        element: <ClientCreatePage />,
      },
      {
        path: Routings.client.view.path,
        element: <ClientViewPage />,
      },
      {
        path: Routings.client.edit.path,
        element: <ClientEditPage />,
      },
      {
        path: Routings.shop.list.path,
        element: <ShopsPage />,
      },
      {
        path: Routings.shop.create.path,
        element: <ShopCreatePage />,
      },
      {
        path: Routings.shop.view.path,
        element: <ShopViewPage />,
      },
      {
        path: Routings.shop.edit.path,
        element: <ShopEditPage />,
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
