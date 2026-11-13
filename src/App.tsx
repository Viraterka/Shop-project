import './App.css';
import { NavLink, Outlet } from 'react-router';

const App = () => {
  return (
    <div className="content">
      <h1>Главная страница</h1>

      <nav>
        <NavLink to="/clients">Клиенты</NavLink> |{' '}
        <NavLink to="/goods">Товары</NavLink> |{' '}
        <NavLink to="/shops">Магазины</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default App;
