import React, { useState, useRef } from "react";
import MarkdownPreview from "../MarkdownPreview/MarkdownPreview.tsx";
import Toolbar from "../Toolbar/Toolbar";
import * as S from "./Markdown.style";


function Markdown() {
  const [markdown, setMarkdown] = useState<string>("# 입력해주세요!");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <S.Body>
      <S.Container>
        <S.Wrapper>
          <Toolbar textareaRef={textareaRef} />

          <S.Textarea
            value={markdown}
            onChange={handleChange}
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


