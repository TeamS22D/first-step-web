import { Outlet } from "react-router";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Container } from "./AuthLayout.style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theme/theme";
import * as S from "./AuthLayout.style";

function AuthLayout() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Container>
                <GlobalStyle />
                <S.Body>
                    <Outlet />
                </S.Body>
                <S.Image />
            </Container>
        </ThemeProvider>
    )
}

export default AuthLayout;