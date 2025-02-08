// react
import React, { useState } from "react";

// style
import { Tabs } from "antd";
import { UserContainer } from "./StyledUser";

// control
import * as Ctrl from "./control";

// config
import * as Config from "./config";

const User = () => {
	const [activeKey, setActiveKey] = useState<string>("1");

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
		</UserContainer>
	);
};

export default User;
