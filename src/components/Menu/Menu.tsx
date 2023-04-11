import React, {useEffect, useRef} from 'react';
import User from "../User/User";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {requestLogOut} from "../../store/UserSlice";

function useOutsideAlerter(ref: any, setMenu: Function) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setMenu(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}


const Menu = ({setMenu}: any) => {
	const {name} = useSelector((state: RootState) => state.user)
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const menuRef = useRef(null);
	useOutsideAlerter(menuRef, setMenu);


	const handleLogOut = () => {
		dispatch(requestLogOut(navigate))
	}
	return (
		<div className="menu" ref={menuRef}>
			<div className="menu_top">
				<div className="menu__user">{name && <User name={name}/>}</div>
				<div className="menu__links">
					<NavLink to="/">Home</NavLink>
					{name && <NavLink to="/create">Add post</NavLink>}
				</div>
			</div>
			<div className="menu__bottom">
				{name ? <button className="btn" onClick={handleLogOut}>Log Out</button> :
					<button className="btn" onClick={() => navigate('/login')}>Sign in</button>}
			</div>
		</div>
	);
};

export default Menu;