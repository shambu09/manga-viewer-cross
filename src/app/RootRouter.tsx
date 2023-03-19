import { Route, Switch } from "react-router-dom";
import Home from "../common/pages/Home";
import Auth from "../features/auth/Auth";
import Error from "../common/pages/Error";
import { PrivateRoute } from "../common/components/PrivateRoute";
import SignUp from "../features/auth/SignUp";
import SignOut from "../common/pages/SignOut";

const RootRouter = () => {
    return (
        <Switch>
            <Route path="/signout" component={SignOut} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <Route exact path="/auth" component={Auth} />
            <Route component={Error} />
        </Switch>
    );
};

export default RootRouter;
