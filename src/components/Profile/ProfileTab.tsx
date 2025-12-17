import { Label } from "@/components/Text/Text.style";
import * as S from "./Profile.style";
import { useEffect, useState } from "react";
import { logout } from "@/hooks/authApi";
import axiosInstance from "@/hooks/axiosInstance";
const SERVER_URL = import.meta.env.VITE_BASE_URL;

type OccupationType = "it" | "video" | "manage" | "finance" | "factory"

interface IProfileProps {
    name: string;
    occupation: OccupationType;
    rank: string;
    age: string;
}

function Profile() {
    const [profile, setProfile] = useState<IProfileProps>();
    const occupation: Record<OccupationType, string> = {
        it: "IT",
        video: "영상 콘텐츠",
        manage: "경영",
        finance: "금융",
        factory: "제조",
    }

    useEffect(() => {
        axiosInstance.get(`${SERVER_URL}/user`)
        .then((response) => {
            setProfile(response.data)
            console.log(response.data)
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
                        <Label as="span">{profile? occupation[profile.occupation]+"직군" : "로딩 중..."}</Label>
                        <S.Line />
                        <Label as="span">{profile? profile.rank : "로딩 중..."}</Label>
                    </S.PersonalInfo>
                </S.Info>
            </S.Profile>
            <S.LogoutBtn onClick={logout}>로그아웃</S.LogoutBtn>
        </S.ProfileContainer>
    )
}

export default Profile;