import styled from 'styled-components'

export const Preview = styled.div`
  height: 100%;
  min-height: 200px;
  overflow: auto;
  font-size: 1rem;
  color: #000000;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  h1, h2, h3, h4, h5, h6 {
    all: revert;      
  }

  ul, ol {
    list-style: revert;      /* 불릿, 번호 복구 */
    margin-left: 1.2rem;     /* 목록 들여쓰기 복구 */
    padding-left: 1rem;
  }

  li {
    margin: 0.25rem 0;
  }

  strong, b {
    font-weight: revert;   /* 굵기 복구 */
  }

`;
