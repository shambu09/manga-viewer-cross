import { Route, Switch } from "react-router-dom";
import Home from "../common/pages/Home";
import Auth from "../features/auth/pages/Auth";
import Error from "../common/pages/Error";
import SignOut from "../common/pages/SignOut";

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
