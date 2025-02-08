// component
import StudentList from "../StudentList/StudentList";
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
		children: <>Group</>,
	},
];
