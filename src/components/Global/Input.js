import React from "react";
import styled, { css } from "styled-components";

export default function Input({ text, textarea, error, ...props }) {
  if (textarea)
    return <TextareaWrapper error={error} placeholder={text} {...props} />;

  return <Wrapper error={error} placeholder={text} {...props} />;
}

const style = css`
  color: ${props => !props.error ? "var(--primary)" : "red"};
  background-color: var(--secondary);
  padding: var(--input-padding);
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  outline: none;
  border: none;
  min-width: 0;

  ::placeholder {
    color: var(--primary-dim);
  }


  
`;

const Wrapper = styled.input`
  ${style}
`;

const TextareaWrapper = styled.textarea`
  font-family: inherit;
  ${style}
`;
