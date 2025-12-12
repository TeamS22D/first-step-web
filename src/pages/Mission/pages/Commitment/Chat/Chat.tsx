import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/ChatFirm.png'
import ImageSend from '@/assets/Mission/Send.png'
import { useContext, useRef, useState} from 'react';
import { useEffect } from 'react'
import { MissionFeedbackContext } from '@/components/MissionLayout/MissionLayout';
import { useNavigate } from 'react-router';


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

// map 함수로 서버에서 전달한 데이터 만큼
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
    const stop = useRef(0)
    const chatUrl = `wss://5279f859d0d8.ngrok-free.app/chat/mission1`;

    const navigate = useNavigate();
    const ctx = useContext(MissionFeedbackContext);
    const afterExitBuffer = useRef<string[]>([]);
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) return;

        if (e.key === "Enter") {
          sendMessage();
        }
      };

    if (!ctx) throw new Error("MissionStep1 must be used inside MissionFeedbackLayout");
  

    useEffect(() => {

        ctx.setButtonAction(() => async () => {
            stop.current = 1;
            afterExitBuffer.current = [];
        
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                ws.current.send("exit");
            }
        });
           

        ws.current = new WebSocket(chatUrl);

        ws.current.onopen = () => {
            console.log("Chat WebSocket OPEN");
        };

        ws.current.onmessage = (event) => {
            const chunk = event.data;
        
            // 평가
            if (stop.current === 1) {
        
                // 버퍼 초기화
                if (chunk === "[EVAL_START]") {
                    afterExitBuffer.current = [];
                    return;
                }
        
                //  "[EVAL_END]"이면 JSON 파싱 및 페이지 이동
                if (chunk === "[EVAL_END]") {
                    try {
                        const jsonText = afterExitBuffer.current.join("");
                        const feedbackData = JSON.parse(jsonText);
        
                        console.log("Collected feedback:", feedbackData);
        
                        navigate("/missionfeedback", {
                            state: { feedback: feedbackData }
                        });
                    } catch (err) {
                        console.error("JSON parse error:", err);
                    }
        
                    afterExitBuffer.current = [];
                    return; 
                }
        
                // JSON chunk만 push
                try {
                    JSON.parse(chunk);
                    afterExitBuffer.current.push(chunk);
                } catch {
                    // JSON 아니면 무시
                    return;
                }
        
                return; 
            }
        
            
            // 일반 채팅 
        
            if (chunk === "[END_OF_STREAM]") return;
        
            setMessages((prev) => {
                const last = prev[prev.length - 1];
        
                if (last && last.sender === "ai") {
                    return [
                        ...prev.slice(0, -1),
                        { ...last, text: last.text + chunk }
                    ];
                }
        
                return [
                    ...prev,
                    { id: Date.now(), sender: "ai", text: chunk }
                ];
            });
        };
                
        

        ws.current.onerror = () => {
            console.log("Chat WebSocket ERROR");
            alert('WebSocket Error')
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
                    onKeyDown={handleKeyPress}
                />
                <S.SendButton onClick={sendMessage}>
                    <Send src={ImageSend} alt="" />
                </S.SendButton>
            </S.InputBox>
        </S.Container>
    );
}

