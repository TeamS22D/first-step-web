import { Caption, Label } from "@/components/Text/Text.style"
import styled from "styled-components"

export const ProfileContainer = styled.div`
    width: 100%;
    min-width: 600px;
    display: flex;
    padding: 14px 38px;
    justify-content: space-between;
    align-items: end;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`

export const Profile = styled.div`
    display: flex;
    gap: 28px;
    align-items: center;
`

export const Image = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 100px;
    background-color: #000000ff;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LogoutBtn = styled.button`
    display: flex;
    padding: 8px 17px;
    border-radius: 5px;
    border: 0;
    background-color: #F1414C;
    color: #fff;
`

export const Name = styled(Caption)`
    font-weight: 500;
    display: flex;
`

export const PersonalInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const Line = styled.div`
    width: 0.8px;
    height: 8px;
    background-color: #B2B2B2;
    border-radius: 10px;
`