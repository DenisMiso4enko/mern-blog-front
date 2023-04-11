import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from "../constance";
import {httpRequest} from "../utils/fetch";
import {IPostsInitialState} from "../types";


const initialState: IPostsInitialState = {
	posts: null,
	page: 1,
	limit: 12,
	loading: false,
	error: null,
	searchValue: '',
	totalPosts: 1,
	totalPages: 1,
	searchResults: null
};


export const fetchGetPosts = createAsyncThunk(
	"posts/fetchGetPosts",
	async function (_, { dispatch, getState }) {
		try {
			// @ts-ignore
			const {page, limit} = getState().posts
			const response = await httpRequest(`${BASE_URL}/posts?page=${page}&limit=${limit}`, "GET")
			const {results, totalPages, totalPosts} = await response.json()
			dispatch(setPosts(results))
			dispatch(setTotalPages(totalPages))
			dispatch(setTotalPosts(totalPosts))

		} catch (e) {
			console.log(e)
		}
	}
);

export const fetchSearchPosts = createAsyncThunk(
	"posts/fetchSearchPosts",
	async function (query: string, { dispatch, getState }) {
		try {
			// @ts-ignore
			// const {page, limit, searchValue} = getState().posts
			const response = await httpRequest(`${BASE_URL}/posts/search?searchQuery=${query}`, "GET")
			const data = await response.json()
			console.log(data)
			dispatch(setPosts(data))
			// dispatch(setPosts(results))
			// dispatch(setTotalPages(totalPages))
			// dispatch(setTotalPosts(totalPosts))

		} catch (e) {
			console.log(e)
		}
	}
);


const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts(state, action) {
			state.posts = action.payload
		},
		setTotalPages(state, action) {
			state.totalPages = action.payload
		},
		setTotalPosts(state, action) {
			state.totalPosts = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		updateLikes(state, action) {
			const { id, likes } = action.payload
			// @ts-ignore
			state.posts = state.posts?.map(post => post._id === id ? {...post, likes } : post)
		},
		// setSearchResult(state, action) {
		// 	state.searchResults = action.payload
		// }

	},
	extraReducers: (builder) => {
		builder.addCase(fetchGetPosts.pending, (state, action) => {
			state.loading = true
		}),
			builder.addCase(fetchGetPosts.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
			}),
			builder.addCase(fetchGetPosts.rejected, (state, action) => {
				state.loading = false
				// @ts-ignore
				state.error = action.error
			}),
			builder.addCase(fetchSearchPosts.pending, (state, action) => {
				state.loading = true
			}),
			builder.addCase(fetchSearchPosts.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
			}),
			builder.addCase(fetchSearchPosts.rejected, (state, action) => {
				state.loading = false
				// @ts-ignore
				state.error = action.error
			})
	},
});

export const { setPosts, setTotalPages, setPage, setTotalPosts, setSearchValue, updateLikes,  } = postsSlice.actions;
export default postsSlice.reducer;
