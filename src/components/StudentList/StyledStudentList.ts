import styled from "styled-components";

export const StudentListContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;

	.studentItemSection {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		gap: 40px;
	}

	@media (max-width: 1024px) {
		.studentItemSection {
			gap: 30px;
		}
	}

	@media (max-width: 500px) {
		.studentItemSection {
			justify-content: center;
		}
	}
`;
