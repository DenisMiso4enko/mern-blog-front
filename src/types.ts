export interface IUserInitialState {
	userId: string | null,
	name: string | null,
	email: string | null,
	loading: boolean,
	error: any,
	favorites: [string] | null,
}


export interface IPostsInitialState {
	posts: [IPost] | null,
	page: number,
	limit: number,
	loading: boolean,
	error: any,
	searchValue: string,
	totalPosts: number,
	totalPages: number,
	searchResults: [IPost] | null,
	popularPosts: [IPost] | null,
	favoritesPosts: [IPost] | null,
}

export interface IPost {
	title: string,
	date: string,
	description: string,
	text: string,
	_id: string,
	userId: string,
	likes: [string],
	dislikes: [number],
	image: string
	

}