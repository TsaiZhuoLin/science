// type
import { T_StudentItem } from "../types";

export enum E_CountChange {
	ADDITION = "ADDITION",
	SUBTRACTION = "SUBTRACTION",
}

export type T_StudentItemProps = {
	student: T_StudentItem;
};
