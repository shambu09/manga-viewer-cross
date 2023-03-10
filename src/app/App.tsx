import "./App.css";
import RootRouter from "./RootRouter";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./store";

const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <RootRouter />
            </Router>
        </Provider>
    );
}

export default App;
