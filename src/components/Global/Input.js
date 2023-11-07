import React from "react";
import styled, { css } from "styled-components";

export default function Input({ text, textarea, error, innerRef, ...props }) {
  
  if (textarea)
    return <TextareaWrapper error={error} placeholder={text} {...props} />;

  return <Wrapper error={error} placeholder={text} {...props} />;
}

const style = css`
  color: ${props => !props.error ? "var(--primary)" : "red"};
  border: ${props => !props.error ? "none" : "2px red solid"};
  background-color: var(--secondary);

  padding-top: ${props => !props.error ? "var(--input-padding-top)" : "calc(var(--input-padding-top) - 2px)"};
  padding-bottom: ${props => !props.error ? "var(--input-padding-bottom)" : "calc(var(--input-padding-bottom) - 2px)"};
  padding-left: ${props => !props.error ? "var(--input-padding-left)" : "calc(var(--input-padding-left) - 2px)"};
  padding-right: ${props => !props.error ? "var(--input-padding-right)" : "calc(var(--input-padding-right) - 2px)"};

  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  outline: none;
  min-width: 0;

  &::placeholder {
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
