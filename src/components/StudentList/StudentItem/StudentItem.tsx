// react

// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { rxChangeCount, rxChangeGroup } from "@/store/features/user/userSlice";

// type
import { E_CountChange, T_StudentItemProps } from "./types";

// style
import { StudentItemContainer } from "./StyledStudentItem";
import * as Ctrl from "./control";
import { T_User } from "@/store/features/user/types";
import { E_TabType } from "../types";

const StudentItem = (props: T_StudentItemProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { student, tabType, currentGroup } = props;

	const handleCountChange = (type: E_CountChange) => () => {
		Ctrl.handleCountChange({
			dispatch,
			rxChangeCount,
			student,
			type,
		});
	};

	const handleClickStudentItem = (student: T_User) => () => {
		if (tabType === E_TabType.LIST) return;
		if (student.group) {
			dispatch(rxChangeGroup(student.group));
		}
	};
	return (
		<StudentItemContainer
			student={student}
			currentGroup={currentGroup}
			tabType={tabType}
			onClick={handleClickStudentItem(student)}
		>
			<div className="idPanel">{student.id}</div>
			<div className="namePanel">{student.name}</div>
			<div className="countsPanel">
				<div
					className="button sub"
					onClick={handleCountChange(E_CountChange.SUBTRACTION)}
				>
					-1
				</div>
				<div className="counts">{student.counts}</div>
				<div
					className="button add"
					onClick={handleCountChange(E_CountChange.ADDITION)}
				>
					+1
				</div>
			</div>
		</StudentItemContainer>
	);
};

export default StudentItem;
