import { Outlet } from "react-router";
import * as S from "./Layout.style";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
    return (
        <S.Container>
            <Sidebar />
            <Outlet />
        </S.Container>
    )
}

export default Layout;