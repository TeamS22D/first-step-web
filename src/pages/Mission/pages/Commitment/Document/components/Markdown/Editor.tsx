// Editor.tsx
import { useRef } from "react";
import Toolbar from "../Toolbar/Toolbar";
import Textarea from "./Markdown";

export default function Editor() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div>
      <Toolbar textareaRef={textareaRef} />
      <Textarea textareaRef={textareaRef} />
    </div>
  );
}
