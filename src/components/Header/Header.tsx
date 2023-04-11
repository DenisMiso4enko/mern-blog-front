import React, {useEffect, useRef, useState} from 'react';
import {IoMenu} from "react-icons/all";
import {FiSearch} from "react-icons/all";
import {AiOutlineUser} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useNavigate} from "react-router-dom";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({toggleMenu}: any) => {
	const {name} = useSelector((state: RootState) => state.user)
	const [openSearch, setOpenSearch] = useState(false)
	const navigate = useNavigate()
	return (
		<>
			<div className="header header-container">
				<div className="header__btn">
					<button onClick={toggleMenu}><IoMenu/></button>
				</div>
				{openSearch && <SearchBar/>}
				<div className="header__actions">
					<div className="header__search">
						<button onClick={() => setOpenSearch(!openSearch)}><FiSearch/></button>
					</div>
					{name ? <User name={name}/> : <button onClick={() => navigate('/login')}><AiOutlineUser/></button>}
				</div>
			</div>
		</>
	);
};

export default Header;