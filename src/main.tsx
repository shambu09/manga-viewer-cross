import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
