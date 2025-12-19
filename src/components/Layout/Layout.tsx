import { Outlet } from "react-router";
import * as S from "./Layout.style";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
    // const navigate = useNavigate();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     const verify = async () => {
    //         const isLoggedIn = await checkLogin();

    //         setIsAuthenticated(isLoggedIn);

    //         if (!isLoggedIn) {
    //             navigate("/auth/login");
    //         }
    //     }

    //     verify();
    // }, [navigate])

    // if(!isAuthenticated) {
    //     return (
    //         <></>
    //     )
    // }

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