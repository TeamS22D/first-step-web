import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import * as S from './MardownPreview.style.ts';


const MarkdownPreview = ({ markdown }: { markdown: string }) => {
  return (
    <S.Preview>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={nord}
                language={match[1]}
                PreTag="div"
              >
                {String(children)
                  .replace(/\n$/, "")
                  .replace(/\n&nbsp;\n/g, "")
                  .replace(/\n&nbsp\n/g, "")}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                style={nord}
                background="green"
                language="textile"
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },
          blockquote({ children, ...props }) {
            return (
              <blockquote
                style={{
                  background: "#3f3e3e9b",
                  padding: "0.5px 16px",
                  borderRadius: "5px",
                  color: '#FFFFFF'
                }}
                {...props}
              >
                {children}
              </blockquote>
            );
          },
          img({ ...props }) {
            return (
              <img
                style={{ maxWidth: "40vw" }}
                src={props.src?.replace("../../../../public/", "/")}
                alt="MarkdownRenderer__Image"
              />
            );
          },
          em({ children, ...props }) {
            return (
              <span style={{ fontStyle: "italic" }} {...props}>
                {children}
              </span>
            );
          },
          table({ children, ...props }) {
            return (
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  textAlign: "left",
                }}
                {...props}
              >
                {children}
              </table>
            );
          },
          th({ children, ...props }) {
            return (
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  fontWeight: "bold",
                  background: "#f9f9f9",
                }}
                {...props}
              >
                {children}
              </th>
            );
          },
          td({ children, ...props }) {
            return (
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                }}
                {...props}
              >
                {children}
              </td>
            );
          },
          tr({ children, ...props }) {
            return (
              <tr
                style={{
                  borderBottom: "1px solid #ccc",
                }}
                {...props}
              >
                {children}
              </tr>
            );
          },
        }}
      >
        {markdown
          ?.replace(/\*\*/gi, "@$_%!^")
          ?.replace(/@\$_%!\^/gi, "**")
          ?.replace(/<\/?u>/gi, "*")}
      </ReactMarkdown>
    </S.Preview>
  );
};

export default MarkdownPreview; 
