import * as S from "./styles/Dictionary.style"
import React from "react";
import Words from "./Words";
import Sidebar from "./Sidebar";

function Dictionary() {
    return (
        <S.Container>
            <Words />
            <Sidebar />
        </S.Container>
    )
}

export default React.memo(Dictionary)