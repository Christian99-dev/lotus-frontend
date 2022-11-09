import { css } from "styled-components";

const Spacing = css`
    :root{
        --border: 250px;

        /** Small Monitor */
        @media (max-width: 1200px) { --border: 100px; }
        
        /** Tablet */
        @media (max-width: 820px) { --border: 50px; }
        
        /** Phone */
        @media (max-width: 420px) { --border: 20px;}
    }

`;

export default Spacing;