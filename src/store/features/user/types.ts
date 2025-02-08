export type T_User = {
	id: number;
	name: string;
	count: number;
};

export type T_Users = {
	users: T_User[];
	status: "idle" | "loading" | "succeeded" | "failed";
};
