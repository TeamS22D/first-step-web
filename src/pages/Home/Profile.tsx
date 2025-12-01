import { Label } from "@/components/Text/Text.style";
import * as S from "./styles/Profile.style";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProfileProps {
    name: string;
    occupation: string;
    rank: string;
    age: string;
}

function Profile() {
    const [profile, setProfile] = useState<IProfileProps>();

    useEffect(() => {
        axios.get("/api")
        .then((response) => {
            setProfile(response.data)
        })
        .catch((error) => {
            alert(error.response.status)
        })
    }, [])
    

    return (
        <S.ProfileContainer>
            <S.Profile>
                <S.Image />
                <S.Info>
                    <S.Name>{profile? profile.name : "로딩 중..."}<Label as="span">님</Label></S.Name>
                    <S.PersonalInfo>
                        <Label as="span">{profile? profile.occupation : "로딩 중..."}</Label>
                        <S.Line />
                        <Label as="span">{profile? profile.rank : "로딩 중..."}</Label>
                        <S.Line />
                        <Label as="span">{profile? profile.age : "로딩 중..."}</Label>
                    </S.PersonalInfo>
                </S.Info>
            </S.Profile>
            <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.ProfileContainer>
    )
}

export default Profile;