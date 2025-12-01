import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/ChatFirm.png'
import ImageSend from '@/assets/Mission/Send.png'

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
        </S.Body>
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

function Input() {
    return (
        <S.InputBox>
            <Inputc placeholder = '내용을 입력해주세요.'/>
            <S.SendButton>
                <Send src = {ImageSend} alt = ''/>
            </S.SendButton>
        </S.InputBox>
    )
}

type MyComponentProps = {
    placeholder: string;
  };
  
  const Inputc = ({ placeholder }: MyComponentProps) => {
    return <S.Input placeholder={placeholder} />;
  };

function ChatBox() {
    return (
        <S.Container>
            <S.Contant/>
            <Input/>
        </S.Container>
    )
}