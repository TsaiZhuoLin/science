// react

// component
import StudentItem from "../StudentList/StudentItem/StudentItem";

// type
import { E_TabType } from "../StudentList/types";

// store
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { T_User } from "@/store/features/user/types";

// style
import { Spin } from "antd";
import { StudentGroupContainer } from "./StyledStudentGroup";

const StudentGroup = () => {
	const { users, status, currentGroup } = useSelector(
		(state: RootState) => state.user
	);
	const isLoading = status === "loading";

	return (
		<StudentGroupContainer>
			<div className="studentItemSection">
				{isLoading && <Spin />}
				{!isLoading &&
					users.map((item: T_User) => {
						return (
							<StudentItem
								key={item.id}
								student={item}
								tabType={E_TabType.GROUP}
								currentGroup={currentGroup}
							/>
						);
					})}
			</div>
		</StudentGroupContainer>
	);
};

export default StudentGroup;
