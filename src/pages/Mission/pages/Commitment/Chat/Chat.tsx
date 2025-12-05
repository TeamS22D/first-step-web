import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/ChatFirm.png'
import ImageSend from '@/assets/Mission/Send.png'
import { useRef, useState} from 'react';
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

    // 메시지를 객체 형태로 관리
    const [messages, setMessages] = useState<
        { id: number; sender: "user" | "ai"; text: string }[]
    >([]);

    const [input, setInput] = useState("");
    const chatUrl = `wss://5cb80eb4eb1b.ngrok-free.app/chat/mission1`;

    useEffect(() => {
        ws.current = new WebSocket(chatUrl);

        ws.current.onopen = () => {
            console.log("Chat WebSocket OPEN");
        };

        ws.current.onmessage = (event) => {
            const chunk = event.data;
            console.log("RECEIVED:", chunk);

            if (chunk === "[END_OF_STREAM]") return;

            setMessages((prev) => {
                const last = prev[prev.length - 1];

                // 이미 ai가 말하는 중이면 이어 붙이기
                if (last && last.sender === "ai") {
                    return [
                        ...prev.slice(0, -1),
                        { ...last, text: last.text + chunk }
                    ];
                }

                // 새로운 ai 메시지 시작
                return [
                    ...prev,
                    { id: Date.now(), sender: "ai", text: chunk }
                ];
            });
        };

        ws.current.onerror = () => {
            console.log("Chat WebSocket ERROR");
        };

        ws.current.onclose = () => {
            console.log("Chat WebSocket CLOSED");
        };

        return () => {
            ws.current?.readyState === 1 && ws.current.close();
        };
    }, []);

    // 메시지 전송
    const sendMessage = () => {
        if (!input.trim()) return;
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(input);

            setMessages((prev) => [
                ...prev,
                { id: Date.now(), sender: "user", text: input }
            ]);

            setInput("");
        } else {
            console.log("WebSocket not open");
        }
    };

    return (
        <S.Container>
            <S.Contant>
                {messages.map((msg) => {
                    if (msg.sender === "user") {
                        return (
                            <S.messageWrapper key={msg.id}>
                                <S.message>
                                    <p>{msg.text}</p>
                                </S.message>
                            </S.messageWrapper>
                        );
                    }

                    return (
                        <S.messageWrapper me key={msg.id}>
                            <S.message me >
                                <span>{msg.text}</span>
                            </S.message>
                        </S.messageWrapper>
                    );
                })}
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

