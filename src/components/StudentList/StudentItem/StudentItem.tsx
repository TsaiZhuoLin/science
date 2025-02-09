// react

// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { rxChangeCount } from "@/store/features/user/userSlice";

// type
import { E_CountChange, T_StudentItemProps } from "./types";

// style
import { StudentItemContainer } from "./StyledStudentItem";
import * as Ctrl from "./control";

const StudentItem = (props: T_StudentItemProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { student } = props;

	const handleCountChange = (type: E_CountChange) => () => {
		const ctrlProps = {
			dispatch,
			rxChangeCount,
			student,
			type,
		};

		Ctrl.handleCountChange(ctrlProps);
	};

	return (
		<StudentItemContainer name={student.name}>
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
