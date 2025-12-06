import { Outlet, useNavigate } from "react-router";
import * as S from "./Layout.style";
import Sidebar from "../Sidebar/Sidebar";
import { getCookie } from "@/hooks/cookies";
import { useEffect, useState } from "react";
import { tokenRefresh } from "@/hooks/authApi";

function Layout() {
    const navigator = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkLogin = async () => {
        const accessToken = getCookie("accessToken");
        const refreshToken = getCookie("refreshToken");
        const userId = getCookie("userId");

        if (accessToken) {
            return true;
        } else {
            if (refreshToken && userId) {
                const newToken = await tokenRefresh(refreshToken, userId)
                if (newToken) {
                    return true;
                }
            }
            return false;
        }
    }

    useEffect(() => {
        const verify = async () => {
            const isLoggedIn = await checkLogin();

            setIsAuthenticated(isLoggedIn);

            if (!isLoggedIn) {
                navigator("/auth/login");
            }
        }

        verify();
    }, [navigator])

    if(!isAuthenticated) {
        return (
            <></>
        )
    }

    return (
        <S.Container>
            <Sidebar />
            <S.Contents>
                <Outlet />
            </S.Contents>
        </S.Container>
    )
}

export default Layout;