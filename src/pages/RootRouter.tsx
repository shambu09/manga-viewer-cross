import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Error from "./Error";
import SignOut from "./SignOut";

const RootRouter = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/auth">
                <Auth />
            </Route>
            <Route exact path="/signout">
                <SignOut />
            </Route>
            <Route>
                <Error />
            </Route>
        </Switch>
    );
};

export default RootRouter;
