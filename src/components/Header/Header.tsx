import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { GoSearch } from "react-icons/go";
import "./index.scss";

interface HeaderProps {
  menu: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Header: FC<HeaderProps> = ({ toggleMenu, menu, closeMenu }) => {
  const { name } = useSelector((state: RootState) => state.user);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <Menu />
      </div>
      <div className="header__right">
        <button
          onClick={() => navigate("/login")}
          className="btn btn-danger btn-general"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
