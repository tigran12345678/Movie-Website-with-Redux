import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_PATH } from "../paths/Paths";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { ReactNode } from "react";

function ProtectedRoutes({ children }: { children: ReactNode }) {
    // first try Redux…
    const reduxToken = useSelector((state: RootState) => state.auth.userToken);
    const token = reduxToken || sessionStorage.getItem("userToken");

    const location = useLocation();
    if (!token) {
        // redirect to login if *still* no token
        return (
            <Navigate
                to={LOGIN_PATH}
                state={{ from: location }}
                replace
            />
        );
    }

    return <>{children}</>;
}

export default ProtectedRoutes;
