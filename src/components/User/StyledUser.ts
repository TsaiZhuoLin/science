import styled from "styled-components";

export const UserContainer = styled.div`
	width: 1000px;
	padding: 20px;
	background-color: #fff;
	position: relative;

	.moreIcon {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 25px;
		&:hover {
			cursor: pointer;
		}
	}

	@media (max-width: 1024px) {
		width: 100%;
		max-width: 768px;
	}
`;

export const ModalTitleContainer = styled.div`
	strong {
		font-size: 25px;
	}

	.titleId {
		margin-right: 15px;
	}

	span {
		.anticon {
			&:hover {
				cursor: pointer;
			}
		}
	}
`;
