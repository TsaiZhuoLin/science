// react
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

// component
import App from "./components/App/App.tsx";

// style
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
