import { css } from "styled-components";

const Color = css`
    :root{
        --black : #4C4452;
        --primary: #8C43CF;
        --primary-dim: rgba(140,67,207,0.40);
        --primary-filter: invert(37%) sepia(45%) saturate(6819%) hue-rotate(256deg) brightness(86%) contrast(86%);
        --secondary: #FFE9FF;
        --secondary-filter: invert(100%) sepia(18%) saturate(7496%) hue-rotate(188deg) brightness(106%) contrast(106%);
        --secondary-transparent: rgba(255,244,255,0.7);
        --yellow: #FFC552;
        --yellow-filter: invert(94%) sepia(39%) saturate(4595%) hue-rotate(314deg) brightness(100%) contrast(101%);
    }
`;

export default Color;