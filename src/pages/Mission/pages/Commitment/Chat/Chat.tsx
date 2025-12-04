import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/ChatFirm.png'
import ImageSend from '@/assets/Mission/Send.png'
import React, { useRef, useState} from 'react';
import useWebSocket from 'react-use-websocket';
import { useEffect } from 'react'


interface ImageProps {
    src: string;
    alt: string;
}


const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src={src} alt={alt} />
    )
}

const Send = ({src, alt}:ImageProps) => {
    return (
        <S.Send src={src} alt={alt} />
    )
}

export default function Chat() {
    return(
        <S.Body>
            <ChatBox/>
            <Introduction/>
        </S.Body>
    )
}

function Introduction() {
    return(
        <S.Introduction>
            <S.TopWrapper>
                <S.Title>
                    상대 정보
                </S.Title>
                <S.FirmInpormation>
                    <S.InpormationWrapper>
                        <Image src={ImageFirm} alt=''/>
                    </S.InpormationWrapper>
                    <S.InpormationWrapper>
                        <S.name>김부장</S.name>
                        <S.slash>|</S.slash>
                        <S.age>52세</S.age>
                    </S.InpormationWrapper>
                </S.FirmInpormation>
            </S.TopWrapper>
            <S.BottomWrapper>
                <Atr/>
                <Atr/>
            </S.BottomWrapper>
        </S.Introduction>
    )
}

function Atr() {
    return(
    <S.atr>
        <S.bar/>
        <S.FontWrapper>
            <S.atrTitle>성격</S.atrTitle>
            <S.atrSub>꼰대같음</S.atrSub>
        </S.FontWrapper>
    </S.atr>
    )
}


function ChatBox() {
    const ws = useRef<WebSocket | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const chatUrl = `wss://3da16e6f7c1d.ngrok-free.app/chat/mission1`; // 채팅용 WebSocket

    useEffect(() => {
        ws.current = new WebSocket(chatUrl);

        ws.current.onopen = () => {
            console.log("Chat WebSocket OPEN");
        };

        ws.current.onmessage = (event) => {
            console.log("RECEIVED:", event.data);
            if (event.data) {
                setMessages((prev) => [...prev, event.data]); // 채팅창에 메시지 추가
            }
        };

        ws.current.onerror = () => {
            console.log("Chat WebSocket ERROR");
        };

        ws.current.onclose = () => {
            console.log("Chat WebSocket CLOSED");
        };

        // cleanup
        return () => {
            ws.current?.readyState === 1 && ws.current.close();
        };
    }, []);

    // 메시지 전송
    const sendMessage = () => {
        if (!input.trim()) return;
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(input);
            setMessages((prev) => [...prev, `나: ${input}`]); // 내 메시지도 추가
            setInput("");
        } else {
            console.log("WebSocket not open");
        }
    };

    return (
        <S.Container>
            <S.Contant>
                {messages.map((msg, i) => (
                    <p key={i}>{msg}</p>
                ))}
            </S.Contant>

            <S.InputBox>
                <S.Input
                    placeholder="내용을 입력해주세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <S.SendButton onClick={sendMessage}>
                    <Send src={ImageSend} alt="" />
                </S.SendButton>
            </S.InputBox>
        </S.Container>
    );
}
