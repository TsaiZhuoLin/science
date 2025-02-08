// react
import React, { useEffect } from "react";

// components
import StudentItem from "./StudentItem/StudentItem";

// store
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/index";
import { fetchUsers } from "@/store/features/user/control";

// type
import { T_StudentItem } from "./types";

// style
import { StudentListContainer } from "./StyledStudentList";

const StudentList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const users = useSelector((state: RootState) => state.user.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	useEffect(() => {
		console.log("users", users);
	}, [users]);

	const fakeStudentList: T_StudentItem[] = [
		{
			id: 1,
			name: "Philip",
			counts: 5,
		},
		{
			id: 2,
			name: "Darell",
			counts: 3,
		},
		{
			id: 3,
			name: "Guest",
			counts: 2,
		},
		{
			id: 4,
			name: "Cody",
			counts: 1,
		},
		{
			id: 5,
			name: "Guest",
			counts: 5,
		},
	];

	return (
		<StudentListContainer>
			<div className="studentItemSection">
				{fakeStudentList.map((item: T_StudentItem) => {
					return <StudentItem student={item} />;
				})}
			</div>
		</StudentListContainer>
	);
};

export default StudentList;
