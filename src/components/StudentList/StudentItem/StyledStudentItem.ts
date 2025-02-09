import styled from "styled-components";

export const StudentItemContainer = styled.div<{ name: string }>`
	width: 150px;
	height: 150px;
	border-radius: 5px;

	.idPanel {
		width: 100%;
		height: 30px;
		/* background-color: #1277e9; */
		background-color: ${(props) =>
			props.name === "Guest" ? "#B6BBBC" : "#1277e9"};
		border-radius: 5px 5px 0 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.namePanel {
		width: 100%;
		height: 90px;
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
		color: ${(props) => (props.name === "Guest" ? "#B6BBBC" : "black")};
	}

	.countsPanel {
		padding: 0 5px;
		width: 100%;
		height: 30px;
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
					props.name === "Guest" ? "not-allowed" : "pointer"};
			}
		}

		.button.sub {
			background-color: ${(props) =>
				props.name === "Guest" ? "#B6BBBC" : "#e53058"};
		}

		.button.add {
			background-color: ${(props) =>
				props.name === "Guest" ? "#B6BBBC" : "#6bc52f"};
		}
	}
`;
