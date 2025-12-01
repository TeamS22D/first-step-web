import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Job.style";

import selectPng from "../../assets/Dictionary/select.png";
import LongButton from "../../components/Buttons/LongButton";

type Field = {
  id: string;
  label: string;
  node: ReactNode;
};

type JobResponse = {
  message: string;
  selectedJob?: {
    code: string;
    label: string;
  };
};

export default function Job() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      node: (
        <img src="/assets/Dictionary/dataAnalyst.png" alt="데이터 분석가" />
      ),
    },
  ];
  const serverUrl = 'http://firsstep.p-e.kr:3000/';

  const handleSubmit = async () => {
    if (!selected || loading) return;

  const handleSubmit = async () => {
    if (!selected || loading) return;

    const email = localStorage.getItem("email") ?? "test@example.com";
    let jobCode = selected;

    setLoading(true);
    try {
      try {
        const res = await fetch(`${ serverUrl }/user/job`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOjgsImlhdCI6MTc2NDUwMTg5MX0.lhr8DsqdXfU13bJaEV595bpd9s2x02pdXg9ZIsDoQsU",
          },
          body: JSON.stringify({
        const res = await fetch("/job", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            job: selected,
          }),
        });

        if (res.ok) {
          const data: JobResponse = await res.json();
          jobCode = data.selectedJob?.code ?? selected;
        } else {
          console.error("직업 선택 API 실패", res.status);
        }
      } catch (err) {
        console.error("직업 선택 요청 오류", err);
      }

      localStorage.setItem("job", jobCode);

      navigate("/Home");
    } finally {
      setLoading(false);
    }
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
      </S.TopRow>

      <S.BottomRow />

      <LongButton disabled={!selected || loading}>
      <LongButton onClick={handleSubmit} disabled={!selected || loading}>
        {loading ? "저장 중..." : "선택 완료"}
      </LongButton>
    </S.Container>
  );
}