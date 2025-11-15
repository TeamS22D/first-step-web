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
                    <S.Name>{profile? profile.name : "null"}<Label>님</Label></S.Name>
                    <S.PersonalInfo>
                        <Label>{profile? profile.occupation : "null"}</Label>
                        <S.Line />
                        <Label>{profile? profile.rank : "null"}</Label>
                        <S.Line />
                        <Label>{profile? profile.age : "null"}</Label>
                    </S.PersonalInfo>
                </S.Info>
            </S.Profile>
            <S.LogoutBtn>로그아웃</S.LogoutBtn>
        </S.ProfileContainer>
    )
}

export default Profile;