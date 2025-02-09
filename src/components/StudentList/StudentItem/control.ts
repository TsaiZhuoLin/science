import { E_CountChange } from "./types";

export const handleCountChange = (props: any) => {
	const { dispatch, rxChangeCount, student, type } = props;
	if (student.name === "Guest") return;

	if (type === E_CountChange.ADDITION) {
		const rxProps = {
			id: student.id,
			type: E_CountChange.ADDITION,
		};
		dispatch(rxChangeCount(rxProps));
	}
	if (type === E_CountChange.SUBTRACTION) {
		const rxProps = {
			id: student.id,
			type: E_CountChange.SUBTRACTION,
		};
		dispatch(rxChangeCount(rxProps));
	}
};
