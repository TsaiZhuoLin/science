// style
import { HeaderContainer } from "./StyledHeader";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
	return (
		<HeaderContainer>
			<span>302 Science</span>
			<UserOutlined />
			16/30
		</HeaderContainer>
	);
};

export default Header;
