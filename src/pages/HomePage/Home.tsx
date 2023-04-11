import React, {useEffect} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Tabs from "../../components/Tabs/Tabs";
import PostsList from "../../components/PostsList/PostsList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchGetPosts} from "../../store/PostsSlice";
import Pagination from "../../components/Pagination/Pagination";
import {TABS} from "../../constance";
import Favorites from "../../components/Favorites/Favorites";
import Popular from "../../components/Popular/Popular";

const Home = () => {
	const {page} =  useSelector((state: RootState) => state.posts)
	const {activeTab} =  useSelector((state: RootState) => state.settings)
	const dispatch = useDispatch<AppDispatch>()


	const getResultComponent = (activeTab: string) => {
		switch(activeTab) {
			case TABS.favorites: {
				return Favorites;
			}
			case TABS.popular: {
				return Popular;
			}
			default: return PostsList
		}
	}
	const ResultComponent = getResultComponent(activeTab)


	useEffect(() => {
		dispatch(fetchGetPosts())
	}, [page])
	return (
		<div>
			<PageTitle title="Home"/>
			<Tabs/>
			<div className="posts-container">
				<ResultComponent/>
				{/*<PostsList/>*/}
				{/*<Pagination/>*/}
			</div>
		</div>
	);
};

export default Home;