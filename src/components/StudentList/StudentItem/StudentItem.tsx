// react

// type
import { T_StudentItemProps } from "./types";

// style
import { StudentItemContainer } from "./StyledStudentItem";
import { Button } from "antd";

const StudentItem = (props: T_StudentItemProps) => {
	console.log("props", props);
	const { student } = props;
	return (
		<StudentItemContainer>
			<div className="idPanel">{student.id}</div>
			<div className="namePanel">{student.name}</div>
			<div className="countsPanel">
				<div className="button sub">-1</div>
				<div className="counts">{student.counts}</div>
				<div className="button add">+1</div>
			</div>
		</StudentItemContainer>
	);
};

export default StudentItem;
