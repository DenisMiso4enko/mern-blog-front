import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import './index.scss';

const Menu = () => {
  const { name } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="menu">
      <NavLink to={'/popular'} className="menu__item">
        Popular
      </NavLink>
      <NavLink to={'/'} className="menu__item">
        New
      </NavLink>
      <NavLink to={'/favorites'} className="menu__item">
        Favorites
      </NavLink>
    </div>
  );
};

export default Menu;
