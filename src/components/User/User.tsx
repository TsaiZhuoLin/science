// react
import { useState } from "react";

// component
import ModalTitle from "./ModalTitle";

// style
import { message, Modal, Tabs } from "antd";
import { UserContainer } from "./StyledUser";
import { MoreOutlined } from "@ant-design/icons";

// control
import * as Ctrl from "./control";

// config
import * as Config from "./config";

// plugin
import { QRCodeCanvas } from "qrcode.react";

const User = () => {
	const [activeKey, setActiveKey] = useState<string>("1");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClickMoreIcon = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
		message.success("已複製!");
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<UserContainer>
			<Tabs
				defaultActiveKey="1"
				type="card"
				size={"small"}
				items={Ctrl.genTabItems()}
				onKeyDown={(e) => Ctrl.handleTabKeyDown({ e, setActiveKey })}
				activeKey={activeKey}
				onChange={(key) => setActiveKey(key)}
			/>

			<div className="moreIcon" onClick={handleClickMoreIcon}>
				<MoreOutlined />
			</div>

			<Modal
				title={<ModalTitle />}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				bodyStyle={Config.modalBodyStyle}
			>
				<QRCodeCanvas
					value={Config.SCIENCE_URL}
					size={300}
					level="H"
					includeMargin={true}
				/>
			</Modal>
		</UserContainer>
	);
};

export default User;
