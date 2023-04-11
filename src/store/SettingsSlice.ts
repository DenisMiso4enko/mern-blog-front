import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {IPostsInitialState} from "../types";
import {TABS} from "../constance";





const initialState = {
	activeTab: TABS.all,

};

const settingsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setActiveTab(state, action) {
			state.activeTab = action.payload
		}
	},
	extraReducers: (builder) => {
	},
});

export const { setActiveTab} = settingsSlice.actions;
export default settingsSlice.reducer;
