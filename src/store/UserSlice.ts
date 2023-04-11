import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {IUserInitialState} from "../types";
import {BASE_URL} from "../constance";
import {httpRequest} from "../utils/fetch";




const initialState: IUserInitialState = {
	userId: null,
	name: null,
	email: null,
	loading: false,
	error: null,
};

export const requestLogOut = createAsyncThunk(
	"user/requestLogOut",
	async function (navigate: any, { dispatch }) {
		localStorage.removeItem("jwtAccess");
		localStorage.removeItem("jwtRefresh");
		dispatch(logOut());
		navigate('/login')
	}
);

export const fetchSignUp = createAsyncThunk(
	"user/fetchSignUp",
	async function (action: any, { dispatch }) {
		const { userData, navigate } = action;
		const response: Response = await httpRequest(
			`${BASE_URL}/user/signUp`,
			"POST",
			userData
		);
		if (response.ok) {
			const data = await response.json();
			const { accessToken, refreshToken, user } = data;
			localStorage.setItem("jwtAccess", accessToken);
			localStorage.setItem("jwtRefresh", refreshToken);
			dispatch(setUser(user));
			navigate("/");
		} else {
			alert(`This "${userData.email}" is not registered.`);
		}
	}
);

export const fetchLogin = createAsyncThunk(
	"user/fetchLogin",
	async function (action: any, { dispatch }) {
		const { userData, navigate } = action;
		const response: Response = await httpRequest(
			`${BASE_URL}/user/login`,
			"POST",
			userData
		);
		if (response.ok) {
			const data = await response.json();
			const { accessToken, refreshToken, user } = data;
			localStorage.setItem("jwtAccess", accessToken);
			localStorage.setItem("jwtRefresh", refreshToken);
			dispatch(setUser(user));
			navigate("/");
		} else {
			alert(`This "${userData.email}" is not registered.`);
		}
	}
);

export const fetchGetMe = createAsyncThunk(
	"user/fetchGetMe",
	async function (_, { dispatch }) {
		const token = localStorage.getItem("jwtAccess");
		if (token !== "undefined") {
			const response: Response = await httpRequest(
				`${BASE_URL}/user/profile`,
				"POST",
				{ token }
			);
			const data = await response.json();

			if (response.ok) {
				const { user } = data;
				dispatch(setUser(user));
			} else {
				const refresh_token = localStorage.getItem("jwtRefresh");
				if (refresh_token !== "undefined") {
					const newToken: Response = await httpRequest(
						`${BASE_URL}/user/token`,
						"POST",
						{ refresh_token }
					);
					const data = await newToken.json();
					const { accessToken, refreshToken, user } = data;
					localStorage.setItem("jwtAccess", accessToken);
					localStorage.setItem("jwtRefresh", refreshToken);
					dispatch(setUser(user));
				} else {
					alert("Попробуйте авторизоваться снова!!!");
				}
			}
		} else {
			alert("Попробуйте авторизоваться снова!");
		}
	}
);



const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			const {name, email, _id} = action.payload
			state.userId = _id
			state.email = email
			state.name = name
		},
		setError(state, action) {
			state.error = action.payload
		},
		logOut(state) {
			state.userId = null
			state.email = null
			state.name = null
		}
	},
	extraReducers: (builder) => {
		// fetch Register
		builder.addCase(fetchSignUp.pending,(state, action) => {
			state.loading = true
		}),
			builder.addCase(fetchSignUp.fulfilled,(state, action) => {
				state.loading = false
				state.error = null
			}),
			builder.addCase(fetchSignUp.rejected,(state, action) => {
				state.loading = false
				state.error = action.error
			}),
			// fetch profile
			builder.addCase(fetchGetMe.pending,(state, action) => {
				state.loading = true
			}),
			builder.addCase(fetchGetMe.fulfilled,(state, action) => {
				state.loading = false
				state.error = null
			}),
			builder.addCase(fetchGetMe.rejected,(state, action) => {
				state.loading = false
			}),
			// fetch login
			builder.addCase(fetchLogin.pending,(state, action) => {
				state.loading = true
			}),
			builder.addCase(fetchLogin.fulfilled,(state, action) => {
				state.loading = false
				state.error = null
			}),
			builder.addCase(fetchLogin.rejected,(state, action) => {
				state.loading = false
				state.error = action.error
			})
	},
});

export const { setUser, setError, logOut } = userSlice.actions;
export default userSlice.reducer;
