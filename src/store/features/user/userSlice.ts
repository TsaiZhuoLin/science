// react
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// control
import { fetchUsers } from "./control";

// types
import { T_ChangeCountAction, T_User, T_Users } from "./types";
import { E_CountChange } from "@/components/StudentList/StudentItem/types";

const initialState: T_Users = {
	users: [],
	status: "idle",
	totalUsers: 0,
	verifiedUsers: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		rxChangeCount: (state, action: PayloadAction<T_ChangeCountAction>) => {
			const student = state.users.find((item) => item.id === action.payload.id);

			if (student && action.payload.type === E_CountChange.ADDITION) {
				student.counts += 1;
			}

			if (
				student &&
				action.payload.type === E_CountChange.SUBTRACTION &&
				student.counts > 0
			) {
				student.counts -= 1;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				const totleCount = action.payload.length;
				const verifiedUsers = action.payload.filter(
					(item: T_User) => item.name !== "Guest"
				).length;
				state.status = "succeeded";
				state.users = action.payload;
				state.totalUsers = totleCount;
				state.verifiedUsers = verifiedUsers;
			})
			.addCase(fetchUsers.rejected, (state) => {
				state.status = "failed";
			});
	},
});
export const { rxChangeCount } = userSlice.actions;
export default userSlice.reducer;
