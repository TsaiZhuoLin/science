// react

// style
import { message } from "antd";
import { ModalTitleContainer } from "./StyledUser";
import { CopyOutlined } from "@ant-design/icons";

// config
import * as Config from "./config";

// plugin
import { CopyToClipboard } from "react-copy-to-clipboard";

const ModalTitle = () => {
	const [messageApi, contextHolder] = message.useMessage();

	return (
		<ModalTitleContainer>
			{contextHolder}
			<strong>Join 302 Science</strong>
			<br />
			<span className="titleId">
				ID: X58E9647
				<CopyToClipboard
					text={"X58E9647"}
					onCopy={() => {
						messageApi.open({
							type: "success",
							content: "X58E9647  已複製!",
						});
					}}
				>
					<CopyOutlined />
				</CopyToClipboard>
			</span>
			<span className="titleLink">
				Link
				<CopyToClipboard
					text={Config.SCIENCE_URL}
					onCopy={() => {
						messageApi.open({
							type: "success",
							content: "連結已複製!",
						});
					}}
				>
					<CopyOutlined />
				</CopyToClipboard>
			</span>
		</ModalTitleContainer>
	);
};

export default ModalTitle;
