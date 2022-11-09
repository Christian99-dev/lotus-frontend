import { css } from "styled-components";

const Scrollbar = css`
    &.scrollbar1{
        &::-webkit-scrollbar {
        background-color: var(--secondary);
        width: 2px;
        }

        &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 50px;
        }

        &::-webkit-scrollbar-thumb:hover {
        background: var(--secondary); 
        }
    }
`;

export default Scrollbar;