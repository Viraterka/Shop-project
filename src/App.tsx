import { ClientsPage } from './pages/clients/ui/ClientsPage';
import { GoodsPage } from './pages/goods/ui/GoodsPage';
import { ShopsPage } from './pages/shops/ui/ShopsPage';

const App = () => {
  return (
    <div>
      <ClientsPage />
      <hr />
      <GoodsPage />
      <hr />
      <ShopsPage />
    </div>
  );
};

export default App;
