// react
import { createSlice } from "@reduxjs/toolkit";

// control
import { fetchUsers } from "./control";

// types
import { Users } from "./types";

const initialState: Users = {
	users: [],
	status: "idle",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export default userSlice.reducer;
