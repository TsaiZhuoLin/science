// component
import StudentList from "../StudentList/StudentList";
import StudentGroup from "../StudentGroup/StudentGroup";
// type
import { T_tabItems } from "./types";

export const tabItems: T_tabItems[] = [
	{
		key: "1",
		label: "Student List",
		children: <StudentList />,
	},
	{
		key: "2",
		label: "Group",
		children: <StudentGroup />,
	},
];

export const modalBodyStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "auto",
};

export const SCIENCE_URL = "https://www.classswift.viewsonic.io/";
