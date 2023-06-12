import {createSlice} from "@reduxjs/toolkit";

import {TABS} from "../constance";

type SettingsInitialState = {
	activeTab: any,
	isOpen: boolean
};

const initialState: SettingsInitialState = {
	activeTab: TABS.all,
	isOpen: false

};

const settingsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setActiveTab(state, action) {
			state.activeTab = action.payload;
		},
		setIsOpen(state, action) {
			state.isOpen = action.payload;
		},
	},
	// extraReducers: (builder) => {
	// },
});

export const {setActiveTab, setIsOpen} = settingsSlice.actions;
export default settingsSlice.reducer;
