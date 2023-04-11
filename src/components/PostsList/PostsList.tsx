import React from 'react';
import Post from "../Post/Post";
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Pagination from "../Pagination/Pagination";

const PostsList = () => {
	const {page, posts, totalPages, loading} = useSelector((state: RootState) => state.posts)
	const firstPost = posts?.[0]
	const postsMid = posts?.slice(1, 5)
	const postsLeft = posts?.slice(5)


	return (
		<>
			<div className="posts-list">
				<div className="posts__left">
					{/* @ts-ignore */}
					<Post {...firstPost}/>
					{postsMid?.map(post => <Post key={post._id} variant='md' {...post}/>)}
				</div>
				<div className="posts__right">
					{postsLeft?.map(post => <Post key={post._id} variant='sm' {...post}/>)}
				</div>
			</div>
			<Pagination/>
		</>
	);
};

export default PostsList;