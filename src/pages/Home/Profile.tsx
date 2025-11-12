import { Label } from "@/components/Text/Text.style";
import * as S from "./styles/Profile.style";

interface IProfileProps {
    name: string;
    occupation: string;
    rank: string;
    age: string;
}

function Profile(props:IProfileProps) {
    return (
        <S.ProfileContainer>
            <S.Profile>
                <S.Image />
                <S.Info>
                    <S.Name>{props.name || "null"}<Label>님</Label></S.Name>
                    <S.PersonalInfo>
                        <Label>{props.occupation || "null"}</Label>
                        <S.Line />
                        <Label>{props.rank || "null"}</Label>
                        <S.Line />
                        <Label>{props.age || "null"}</Label>
                    </S.PersonalInfo>
                </S.Info>
            </S.Profile>
            <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.ProfileContainer>
    )
}

export default Profile;