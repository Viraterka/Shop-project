import { NavLink } from 'react-router';

export const GoodsPage = () => {
  return (
    <>
      <h1>Goods</h1>
      <p>Список товаров (заглушка).</p>
      <NavLink to="/" end>
        Домашняя страница
      </NavLink>
    </>
  );
};
