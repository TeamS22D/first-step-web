import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Occupation.style";

import itPng from "../../assets/Dictionary/it.png";
import videoPng from "../../assets/Dictionary/video.png";
import managePng from "../../assets/Dictionary/manage.png";
import financePng from "../../assets/Dictionary/finance.png";
import factoryPng from "../../assets/Dictionary/factory.png";
import selectPng from "../../assets/Dictionary/select.png";
import LongButton from "../../components/Buttons/LongButton";

type Field = {
  id: string;
  label: string;
  node: ReactNode;
};

type OccupationResponse = {
  message: string;
  selectedOccupation?: {
    code: string;
    label: string;
  };
};

export default function Occupation() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fields: Field[] = [
    { id: "it",      label: "IT",          node: <img src={itPng} alt="it" /> },
    { id: "video",   label: "영상 콘텐츠", node: <img src={videoPng} alt="영상 콘텐츠" /> },
    { id: "manage",  label: "경영",       node: <img src={managePng} alt="경영" /> },
    { id: "finance", label: "금융",       node: <img src={financePng} alt="금융" /> },
    { id: "factory", label: "제조",       node: <img src={factoryPng} alt="제조" /> },
  ];

  const handleSubmit = async () => {
    if (!selected || loading) return;

    const email = localStorage.getItem("email") ?? "test@example.com";
    let occupationCode = selected;

    setLoading(true);
    try {
      try {
        const res = await fetch("/occupation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            occupation: selected,
          }),
        });

        if (res.ok) {
          const data: OccupationResponse = await res.json();
          occupationCode = data.selectedOccupation?.code ?? selected;
        } else {
          console.error("분야 선택 API 실패", res.status);
        }
      } catch (err) {
        console.error("분야 선택 요청 오류", err);
      }

      localStorage.setItem("occupation", occupationCode);
      navigate("/job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Title>분야를 선택해주세요!</S.Title>

      <S.Description>
        <p>안녕하세요. 민선영님.</p>
        <p>
          첫걸음 서비스 이용을 위해 분야를 선택해주세요. 선택 직군에 맞는
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

      <S.BottomRow>
        {fields.slice(3).map((field) => {
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
      </S.BottomRow>

      <LongButton onClick={handleSubmit} disabled={!selected || loading}>
        {loading ? "저장 중..." : "선택 완료"}
      </LongButton>
    </S.Container>
  );
}
