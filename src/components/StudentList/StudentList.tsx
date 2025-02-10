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
import { E_TabType } from "./types";

const StudentList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { users, status, currentGroup } = useSelector(
		(state: RootState) => state.user
	);
	const isLoading = status === "loading";

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<StudentListContainer>
			<div className="studentItemSection">
				{isLoading && <Spin />}
				{!isLoading &&
					users.map((item: T_User) => {
						return (
							<StudentItem
								key={item.id}
								student={item}
								tabType={E_TabType.LIST}
								currentGroup={currentGroup}
							/>
						);
					})}
			</div>
		</StudentListContainer>
	);
};

export default StudentList;
