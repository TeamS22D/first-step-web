import * as S from './Chat.style'
import ImageFirm from '@/assets/Mission/ChatFirm.png'

interface ImageProps {
    src: string;
    alt: string;
}

const Image = ({src, alt}:ImageProps) => {
    return (
        <S.Image src={src} alt={alt} />
    )
}

export default function Chat() {
    return(
        <S.Body>
            <S.Container>
            </S.Container>
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
            </S.Introduction>
        </S.Body>
    )
}