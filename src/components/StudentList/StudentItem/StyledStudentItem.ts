import styled from "styled-components";
import { T_StudentItemContainerProps } from "./types";
import { E_TabType } from "../types";

export const StudentItemContainer = styled.div<T_StudentItemContainerProps>`
	width: 150px;
	height: 150px;
	border-radius: 5px;
	margin-bottom: 20px;

	.idPanel {
		width: 100%;
		height: 20%;
		background-color: ${(props) => {
			if (props.tabType === E_TabType.LIST) {
				return props.student.name === "Guest" ? "#B6BBBC" : "#1277e9";
			}
			if (props.currentGroup === props.student.group) {
				return "#5CBD24";
			}
			return props.student.name === "Guest" ? "#B6BBBC" : "#1277e9";
		}};
		border-radius: 5px 5px 0 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.namePanel {
		width: 100%;
		height: 60%;
		background-color: #fff;
		border-left: 1px solid;
		border-right: 1px solid;
		border-bottom: 1px solid;
		border-color: #1277e9;
		font-size: 24px;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${(props) => (props.student.name === "Guest" ? "#B6BBBC" : "black")};
	}

	.countsPanel {
		padding: 0 5px;
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: 1px solid;
		border-right: 1px solid;
		border-bottom: 1px solid;
		border-color: #1277e9;
		border-radius: 0 0 5px 5px;
		background-color: #fff;

		.counts {
			font-size: 20px;
		}

		.button {
			width: 35px;
			height: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			border-radius: 5px;
			&:hover {
				cursor: ${(props) =>
					props.student.name === "Guest" ? "not-allowed" : "pointer"};
			}
		}

		.button.sub {
			background-color: ${(props) =>
				props.student.name === "Guest" ? "#B6BBBC" : "#e53058"};
		}

		.button.add {
			background-color: ${(props) =>
				props.student.name === "Guest" ? "#B6BBBC" : "#6bc52f"};
		}
	}

	@media (max-width: 1024px) {
		width: 200px;
		height: 200px;
	}

	@media (max-width: 500px) {
		width: 250px;
		height: 250px;
	}
`;
