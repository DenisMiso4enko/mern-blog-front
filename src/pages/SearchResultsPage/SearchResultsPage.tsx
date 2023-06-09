import React, {useEffect} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchSearchPosts} from "../../store/PostsSlice";
import Post from "../../components/Post/Post";

const SearchResultsPage = () => {
	const {query} = useParams()
	const {posts} = useSelector((state: RootState) => state.posts)
	const dispatch = useDispatch<AppDispatch>()


	useEffect(() => {
		dispatch(fetchSearchPosts(query!))
	}, [query])


	return (
		<div className="search-result-page">
			<PageTitle title={`Search results ‘${query}’`}/>

			<div className="search-list">
				{!posts && <p>No results</p>}
				{posts?.map(post => <Post key={post._id} {...post} variant="sm"/>)}
			</div>


		</div>
	);
};

export default SearchResultsPage;