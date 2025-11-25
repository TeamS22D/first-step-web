import { Bold, Italic, List, ListOrdered, Table, SquareMinus } from "lucide-react";
import { useState } from "react";
import * as S from "./Toolbar.style.ts";
import Dropdown from '../Dropdown/Dropdown.tsx'

type ToolbarProps = {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
};

function Toolbar({ textareaRef }: ToolbarProps) {
  const [headerLevel, setHeaderLevel] = useState("#");

  const handleInsert = (insertText: string, judgment: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const before = value.substring(0, selectionStart);
    const selected = value.substring(selectionStart, selectionEnd);
    const after = value.substring(selectionEnd);

    if (judgment === '1'){
      const newValue = before + insertText + selected + after;
      textarea.value = newValue;
      textarea.focus();
    } else if (judgment === '2'){
      const newValue = before + insertText + selected + insertText + after;
      textarea.value = newValue;
      textarea.focus();
    } else if (judgment === '3'){
      const newValue = before + selected + insertText + after;
      textarea.value = newValue;
      textarea.focus();
    }
  };

  const headerOptions = ["#", "##", "###", "####", "#####"];

  return (
    <S.ToolbarContainer>
      <S.IconButton2
      >
        <Dropdown 
          options={headerOptions} 
          initialSelected={headerLevel} 
          onSelect={(value) => {
            setHeaderLevel(value);              // 선택 상태 업데이트
            handleInsert(value + " ", '1');     // 선택 즉시 textarea에 삽입
          }}
        />

      </S.IconButton2>

      <S.IconButton
        onClick={() => handleInsert("**", '2')}
      >
        <Bold />
      </S.IconButton>

      <S.IconButton
        onClick={() => handleInsert("~~", '2')}
      >
        <Italic />
      </S.IconButton>

      <S.IconButton
        onClick={() => handleInsert("- ", '1')}
      >
        <List />
      </S.IconButton>

      <S.IconButton
        onClick={() => handleInsert("1. ", '1')}
      >
        <ListOrdered />
      </S.IconButton>

      <S.IconButton
        onClick={() => handleInsert('|  |  |\n|--|--|\n|  |  |\n|  |  |\n|  |  |\n|  |  |\n|  |  |\n|  |  |', '3')}
      >
        <Table />
      </S.IconButton>

      <S.IconButton
        onClick={() => handleInsert("---", '1')}
      >
        <SquareMinus />
      </S.IconButton>
    </S.ToolbarContainer>
  );
}

export default Toolbar;

