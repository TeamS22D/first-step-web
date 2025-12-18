import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/Firm/woman1.png'
import ImageSend from '@/assets/Mission/ChatInput/Send.png'
import { useContext, useRef, useState} from 'react';
import { useEffect } from 'react'
import { MissionFeedbackContext } from '@/components/MissionLayout/MissionLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { getChatMission, type ChatMissionResponse } from '@/hooks/chatApi';


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
    const { chatMissionId } = useParams<{ chatMissionId: string }>();
    const [mission, setMission] = useState<ChatMissionResponse | null>(null);

    useEffect(() => {
        if (!chatMissionId) return;
        const fetchMission = async () => {
            try {
                const data = await getChatMission(Number(chatMissionId));
                setMission(data);
                // console.log('데이터 로드 완료', data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchMission();
    }, [chatMissionId]);

    return (
        <S.Body>
            <ChatBox />
            {/* mission 데이터를 props로 넘겨줌 */}
            <Introduction mission={mission} />
        </S.Body>
    );
}

interface IntroductionProps {
    mission: ChatMissionResponse | null;
}

function Introduction({ mission }: IntroductionProps) {
    // 데이터가 없을 때를 대비한 방어 코드
    if (!mission) return null; 

    return (
        <S.Introduction>
            <S.TopWrapper>
                <S.Title>상대 정보</S.Title>
                <S.FirmInpormation>
                    <S.InpormationWrapper>
                        <Image src={ImageFirm} alt=''/>
                    </S.InpormationWrapper>
                    <S.InpormationWrapper>
                        {/* ai_persona 내부 데이터 연결 */}
                        <S.name>{mission.ai_persona?.name || "정보 없음"}</S.name>
                        <S.slash>|</S.slash>
                        <S.age>{mission.ai_persona?.role || "직함 없음"}</S.age>
                    </S.InpormationWrapper>
                </S.FirmInpormation>
            </S.TopWrapper>
            
            <S.BottomWrapper>
                {/* Atr 컴포넌트에 데이터를 넘겨줌 */}
                <Atr 
                    title="성격" 
                    sub={mission.ai_persona?.character || "정보가 없습니다."} 
                />
                {/* <Atr 
                    title="특징" 
                    sub={mission.description || "정보가 없습니다."} 
                /> */}
            </S.BottomWrapper>
        </S.Introduction>
    )
}

// Props를 받도록 수정하여 재사용 가능하게 함
function Atr({ title, sub }: { title: string; sub: string }) {
    return (
        <S.atr>
            <S.bar/>
            <S.FontWrapper>
                <S.atrTitle>{title}</S.atrTitle>
                <S.atrSub>{sub}</S.atrSub>
            </S.FontWrapper>
        </S.atr>
    )
}


function ChatBox() {      
    const userPreams = useParams()
    const ws = useRef<WebSocket | null>(null);

    // 메시지를 객체 형태로 관리
    const [messages, setMessages] = useState<
        { id: number; sender: "user" | "ai"; text: string }[]
    >([]);

    const [input, setInput] = useState("");
    const stop = useRef(0)
    const chatUrl = `wss://9bdc56c925a9.ngrok-free.app/chat/mission/1`;

    const navigate = useNavigate();
    const ctx = useContext(MissionFeedbackContext);
    const afterExitBuffer = useRef<string[]>([]);

    const [isLoadingAI, setIsLoadingAI] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // 메시지 업데이트 시 자동 스크롤
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // input focus 중 enter 키 누를 시 sendMessge 실행
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) return;

        if (e.key === "Enter") {
          sendMessage();
        }
      };

    if (!ctx) throw new Error("MissionStep1 must be used inside MissionFeedbackLayout");
  
    useEffect(() => {
        if (!isLoadingAI) {
            inputRef.current?.focus();
        }
    }, [isLoadingAI]);  // isLoadingAI가 false로 바뀔 때 포커스

    useEffect(() => {
        scrollToBottom();
    }, [messages]);  // messages가 업데이트될 때마다 실행

    useEffect(() => {

        ctx.setButtonSubmitAction(() => async () => {
            stop.current = 1;
            afterExitBuffer.current = [];
        
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                ws.current.send("[COMPLETE]");
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
        
            
        
            if (chunk === "[END_OF_STREAM]") {
                setIsLoadingAI(false);
                return;
            }

            // 일반 채팅 
            setMessages((prev) => {
                const last = prev[prev.length - 1];
            
                if (last && last.sender === "ai") {
                    // 로딩 메시지면 chunk로 교체
                    // 아니면 추가
                    const newText = last.text === "답장 중..." ? chunk : last.text + chunk;
                    
                    return [
                        ...prev.slice(0, -1),
                        { ...last, text: newText }
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
        if (!input.trim() || isLoadingAI) return;
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(input);

            setMessages((prev) => [
                ...prev,
                { id: Date.now(), sender: "user", text: input },
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: "답장 중..." 
                }
            ]);

            setIsLoadingAI(true);
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
                <div ref={messagesEndRef} />
            </S.Contant>

            <S.InputBox>
                <S.Input
                    placeholder="내용을 입력해주세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLoadingAI}
                    ref={inputRef}
                />
                <S.SendButton 
                    onClick={sendMessage}
                    disabled={isLoadingAI}
                >
                    <Send src={ImageSend} alt="" />
                </S.SendButton>
            </S.InputBox>
        </S.Container>
    );
}

