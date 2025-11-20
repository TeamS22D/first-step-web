import { useState, type ReactNode } from "react";
import * as S from "./Job.style";

import selectPng from "../../assets/Dictionary/select.png";
import LongButton from "../Auth/components/LongButton";

type Field = {
  id: string;
  label: string;
  node: ReactNode;
};

export default function Occupation() {
  const [selected, setSelected] = useState<string | null>(null);

  const fields: Field[] = [
    {
      id: "developer",
      label: "개발자",
      node: <img src="/assets/Dictionary/developer.png" alt="개발자" />,
    },
    {
      id: "designer",
      label: "UI/UX 디자이너",
      node: <img src="/assets/Dictionary/designer.png" alt="UI/UX 디자이너" />,
    },
    {
      id: "dataAnaly",
      label: "데이터 분석가",
      node: <img src="/assets/Dictionary/dataAnalyst.png" alt="데이터 분석가" />,
    },
  ];

  const handleSubmit = () => {
    if (!selected) return;
    localStorage.setItem("occupation", selected);
  };

  return (
    <S.Container>
      <S.Title>직업을 선택해주세요!</S.Title>

      <S.Description>
        <p>안녕하세요. 민선영님.</p>
        <p>
          첫걸음 서비스 이용을 위해 직업을 선택해주세요. 선택 직군에 맞는
          미션으로 더 나은 서비스를
        </p>
        <p>지원하겠습니다. 저희는 당신의 첫걸음을 응원하고 지지하겠습니다.</p>
      </S.Description>

      <S.TopRow>
        {fields.slice(0, 3).map((field) => {
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
      </S.TopRow>

      <S.BottomRow />

      <LongButton disabled={!selected}>
        선택 완료
      </LongButton>
    </S.Container>
  );
}
