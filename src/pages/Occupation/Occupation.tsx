import { useState } from "react";
import * as S from "./Occupation.style";

type Field = {
  id: string;
  label: string;
  image: string;
};

export default function Occupation() {
  const [selected, setSelected] = useState<string | null>(null);

  const fields: Field[] = [
    { id: "it", label: "IT", image: "/assets/it.png" },
    { id: "video", label: "영상 콘텐츠", image: "/assets/video.png" },
    { id: "manage", label: "경영", image: "/assets/manage.png" },
    { id: "finance", label: "금융", image: "/assets/finance.png" },
    { id: "factory", label: "제조", image: "/assets/factory.png" },
  ];

  return (
    <S.Container>
      <S.Title>분야를 선택해주세요!</S.Title>

      <S.Description>
        <p>안녕하세요. 민선영님.</p>
        <p>첫걸음 서비스 이용을 위해 분야를 선택해주세요. 선택 직군에 맞는 미션으로 더 나은 서비스를</p>
        <p>지원하겠습니다. 저희는 당신의 첫걸음을 응원하고 지지하겠습니다.</p>
      </S.Description>

      <S.CardGrid>
        {fields.map((field) => (
          <S.Card
            key={field.id}
            $selected={selected === field.id}
            onClick={() => setSelected(field.id)}
          >
            <img src={field.image} alt={field.label} />
            <p>{field.label}</p>
            <S.CheckCircle $selected={selected === field.id}>
              {selected === field.id && "✔"}
            </S.CheckCircle>
          </S.Card>
        ))}
      </S.CardGrid>

      <S.SubmitButton disabled={!selected}>선택 완료</S.SubmitButton>
    </S.Container>
  );
}
