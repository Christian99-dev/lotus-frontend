export const scaleUp = (percent, from) => (from * percent - from);
export const xPercentFromAtoB = (a, b) => Math.abs((b/a - 1) * 100 );
export const addApercentToB = (a,b,minus) => {
    b = Number(b);
    return !minus ? b + (b + scaleUp((a + 100) / 100, b) ) :  b - (b + scaleUp((a + 100) / 100, b))

}
  
