import { NavLink } from 'react-router';

export const ShopsPage = () => {
  return (
    <>
      <h1>Shops</h1>
      <p>Список магазинов (заглушка).</p>
      <NavLink to="/" end>
        Домашняя страница
      </NavLink>
    </>
  );
};
