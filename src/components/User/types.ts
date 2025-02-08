// react
import React, { useState } from "react";

export type T_handleTabKeyDown = {
	e: React.KeyboardEvent;
	setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export type T_tabItems = {
	key: string;
	label: string;
	children: React.ReactNode;
};
