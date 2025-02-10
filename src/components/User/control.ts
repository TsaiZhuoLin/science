// react

// types
import { T_handleTabKeyDown } from "./types";

// config
import { tabItems } from "./config";

export const handleTabKeyDown = (props: T_handleTabKeyDown) => {
	const { e, setActiveKey } = props;

	if (e.key === "Tab") {
		e.preventDefault();
		setActiveKey((prevKey) => (prevKey === "1" ? "2" : "1"));
	}
};

export const genTabItems = () => {
	return tabItems.map((e) => {
		return e;
	});
};
