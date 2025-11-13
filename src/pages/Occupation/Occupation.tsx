import { useState, type ReactNode } from "react";
import * as S from "./Occupation.style";

import itPng from "../../assets/Dictionary/it.png";
import videoPng from "../../assets/Dictionary/video.png";
import managePng from "../../assets/Dictionary/manage.png";
import financePng from "../../assets/Dictionary/finance.png";
import factoryPng from "../../assets/Dictionary/factory.png";
import selectPng from "../../assets/Dictionary/select.png";

type Field = {
  id: string;
  label: string;
  node: ReactNode;
};

export default function Occupation() {
  const [selected, setSelected] = useState<string | null>(null);

  const fields: Field[] = [
    { id: "it", label: "IT", node: <img src={itPng} alt="it" /> },
    { id: "video", label: "영상 콘텐츠", node: <img src={videoPng} alt="영상 콘텐츠" /> },
    { id: "manage", label: "경영", node: <img src={managePng} alt="경영" /> },
    { id: "finance", label: "금융", node: <img src={financePng} alt="금융" /> },
    { id: "factory", label: "제조", node: <img src={factoryPng} alt="제조" /> },
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
      {fields.map((field) => {
        const isSelected = selected === field.id;

        return (
          <S.Card
            key={field.id}
            $selected={isSelected}
            onClick={() => setSelected(field.id)}
          >
            {field.node}
            <p>{field.label}</p>

            <S.CheckCircle $selected={isSelected}>
              {isSelected && <img src={selectPng} alt="selected" />}
            </S.CheckCircle>
          </S.Card>
        );
      })}
    </S.CardGrid>

    <S.SubmitButton disabled={!selected}>선택 완료</S.SubmitButton>
  </S.Container>
  );
}
