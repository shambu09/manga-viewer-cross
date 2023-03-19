import { Redirect, Route, RouteProps } from "react-router-dom";
import { useCheckUserAuthStatus } from "../hooks/useCheckAuthStatus";
import { UserAuthStatusEnum } from "../../features/auth/userAuthStatus.enum";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
} & RouteProps;

export function PrivateRoute({ children, ...rest }: Props) {
    const userAuthStatus = useCheckUserAuthStatus();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userAuthStatus === UserAuthStatusEnum.USER_FETCHED ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signup",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
