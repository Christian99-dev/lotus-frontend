import { css } from "styled-components";

export const xPercentFrom = (percent, from) => from * percent - from;

export const reductionInPercentFromAtoB = (a = 15, b = 2) => ((b/a - 1) * 100 ) * -1
  
export const createResponsiveVar = (varname, base) => {

  
  return css``;
}
