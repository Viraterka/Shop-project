import './App.css';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router';

const { Header, Content, Footer } = Layout;

// Пункт 10: массив menuItems объявляется за пределами компонента
const menuItems = [
  {
    key: 'shops',
    label: <NavLink to="/shops">Магазины</NavLink>,
  },
  {
    key: 'clients',
    label: <NavLink to="/clients">Клиенты</NavLink>,
  },
  {
    key: 'goods',
    label: <NavLink to="/goods">Товары</NavLink>,
  },
];

const App = () => {
  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      {/* Пункт 10: Меню в шапке */}
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      {/* Пункт 9 и 11: Content с Outlet для отображения страниц */}
      <Content style={{ padding: '24px', backgroundColor: '#fff' }}>
        <Outlet />
      </Content>

      {/* Пункт 9: Footer с текстом */}
      <Footer style={{ textAlign: 'center' }}>
        Система мониторинга shop-ui
      </Footer>
    </Layout>
  );
};

export default App;
