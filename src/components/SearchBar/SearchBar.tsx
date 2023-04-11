import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {setSearchValue} from "../../store/PostsSlice";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
	const {searchValue} = useSelector((state: RootState) => state.posts)
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const handleSearchSubmit = async (event: any) => {
		event.preventDefault()
	  try {
			if (searchValue.trim()) {
				dispatch(setSearchValue(''))
				navigate(`/post/search/${searchValue}`)
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<form className="search-form" onSubmit={handleSearchSubmit}>
			<input className="search-input" onChange={(event) => dispatch(setSearchValue(event.target.value))}
						 value={searchValue} placeholder="Search..."/>
		</form>
	);
};

export default SearchBar;