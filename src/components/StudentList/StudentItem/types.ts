// type
import { T_User } from "@/store/features/user/types";
import { E_TabType } from "../types";

export enum E_CountChange {
	ADDITION = "ADDITION",
	SUBTRACTION = "SUBTRACTION",
}

export type T_StudentItemProps = {
	student: T_User;
	tabType: E_TabType;
	currentGroup: string;
};

export type T_StudentItemContainerProps = {
	student: T_User;
	currentGroup: string;
	tabType: E_TabType;
};
