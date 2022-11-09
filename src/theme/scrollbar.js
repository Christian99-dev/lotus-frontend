import { css } from "styled-components";

const Scrollbar = (width) => {
  return css`
    &::-webkit-scrollbar {
      background-color: var(--secondary);
      width: ${width};
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--secondary);
    }
  `;
};

export default Scrollbar;
