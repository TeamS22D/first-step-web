import { Outlet } from "react-router";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Container } from "./AuthLayout.style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme";

function AuthLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Container>
                <GlobalStyle />
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

export default AuthLayout;