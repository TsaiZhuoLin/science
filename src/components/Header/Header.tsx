// style
import { useSelector } from "react-redux";
import { HeaderContainer } from "./StyledHeader";
import { UserOutlined } from "@ant-design/icons";
import { RootState } from "@/store";

const Header = () => {
	const { totalUsers, verifiedUsers } = useSelector(
		(state: RootState) => state.user
	);

	return (
		<HeaderContainer>
			<span>302 Science</span>
			<UserOutlined />
			{verifiedUsers}/{totalUsers}
		</HeaderContainer>
	);
};

export default Header;
