import { createAsyncThunk } from "@reduxjs/toolkit";

const JSON_URL_STUDENTS = "http://localhost:5050/students";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch(JSON_URL_STUDENTS);
	return response.json();
});
