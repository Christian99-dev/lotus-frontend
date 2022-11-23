import { css } from "styled-components";
import { responsiveVar } from "../utils/responsive";

const Spacing = css`
    :root{
        ${responsiveVar("border", 14, "%")}
    }

`;

export default Spacing;