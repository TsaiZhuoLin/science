import { E_CountChange } from "@/components/StudentList/StudentItem/types";

export type T_User = {
	id: number;
	name: string;
	counts: number;
};

export type T_Users = {
	users: T_User[];
	status: "idle" | "loading" | "succeeded" | "failed";
	totalUsers: number;
	verifiedUsers: number;
};

export type T_ChangeCountAction = {
	id: number;
	type: E_CountChange;
};
