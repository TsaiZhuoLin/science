// react
import { useEffect } from "react";

// components
import StudentItem from "./StudentItem/StudentItem";

// store
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@store/index";
import { fetchUsers } from "@/store/features/user/control";

// style
import { StudentListContainer } from "./StyledStudentList";
import { T_User } from "@/store/features/user/types";
import { Spin } from "antd";

const StudentList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { users, status } = useSelector((state: RootState) => state.user);
	const isLoading = status === "loading";

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	useEffect(() => {
		if (users) {
			console.log("users", users);
		}
	}, [users]);

	return (
		<StudentListContainer>
			<div className="studentItemSection">
				{isLoading && <Spin />}
				{!isLoading &&
					users.map((item: T_User) => {
						return <StudentItem student={item} />;
					})}
			</div>
		</StudentListContainer>
	);
};

export default StudentList;
