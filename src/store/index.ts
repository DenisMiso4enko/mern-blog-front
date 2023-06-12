import { configureStore } from '@reduxjs/toolkit';
import { ThunkDispatch } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import postsSlice from "./PostsSlice";
import settingsSlice from "./SettingsSlice";

export const store = configureStore({
	reducer: {
		user: userSlice,
		posts: postsSlice,
		settings: settingsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<any, any, any>;