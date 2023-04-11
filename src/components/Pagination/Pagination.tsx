import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {setPage} from "../../store/PostsSlice";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"


const Pagination = () => {
	const [isPrevDisabled, setIsPrevDisabled] = useState(false);
	const [isNextDisabled, setIsNextDisabled] = useState(false);
	const {page, limit, totalPages, totalPosts} = useSelector((state: RootState) => state.posts);


	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		setIsPrevDisabled(page === 1);
		const count = Math.ceil(totalPosts / 12);
		setIsNextDisabled(count === page);
	}, [page, limit, totalPosts])


	return (
		<div className="pagination-container">
			<div className='pagination'>
				<div className='pagination__left'>
					<button className='pagination__btn icon' style={{opacity: isPrevDisabled ? '0.5' : ''}} disabled={isPrevDisabled}
									onClick={() => dispatch(setPage(page - 1))}>
						<BsArrowLeft/>
					</button>
				</div>
				<div>{page}</div>
				<div className='pagination__right'>
					<button className='pagination__btn icon' disabled={isNextDisabled} style={{opacity: isNextDisabled ? '0.5' : ''}}
									onClick={() => dispatch(setPage(page + 1))}>
						<BsArrowRight/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pagination;