import React from "react";
import styled from "styled-components";

export default function Input({ text, textarea, ...props }) {
  if (textarea) return <TextareaWrapper placeholder={text} {...props} />;

  return <Wrapper placeholder={text} {...props} />;
}

const Wrapper = styled.input`
  color: var(--primary);
  background-color: var(--secondary);
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
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

const TextareaWrapper = styled.textarea`
  color: var(--primary);
  background-color: var(--secondary);
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  outline: none;
  border: none;
  font-family: inherit;
  min-width: 0;

  ::placeholder {
    color: var(--primary-dim);
  }
`;
