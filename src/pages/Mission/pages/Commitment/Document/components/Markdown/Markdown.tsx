import React, { useRef } from "react";
import MarkdownPreview from "../MarkdownPreview/MarkdownPreview.tsx";
import Toolbar from "../Toolbar/Toolbar";
import * as S from "./Markdown.style";

interface MarkdownProps {
  markdown: string;
  onChange: (value: string) => void;
}

function Markdown({ markdown, onChange }: MarkdownProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <S.Body>
      <S.Container>
        <S.Wrapper>
          <Toolbar textareaRef={textareaRef} onChange={onChange} />

          <S.Textarea
            value={markdown}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Markdown 문법으로 작성하세요"
            ref={textareaRef}
          />
        </S.Wrapper>

        <S.Preview>
          <MarkdownPreview markdown={markdown} />
        </S.Preview>
      </S.Container>
    </S.Body>
  );
}

export default Markdown;



