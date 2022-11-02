import React from "react";

const SpaceWrapper = ({ spacing, children, margin, center, ...props }) => {
  /**
   * No Spacing declared - funnels children
   */
  if (!spacing) return <div {...props}>{children}</div>;

  const { top = spacing.top ? spacing.top : 0 } = spacing;
  const { right = spacing.right ? spacing.right : 0 } = spacing;
  const { bottom = spacing.bottom ? spacing.bottom : 0 } = spacing;
  const { left = spacing.left ? spacing.left : 0 } = spacing;

  let style = margin
    ? { margin: `${top}px ${right}px ${bottom}px ${left}px` }
    : { padding: `${top}px ${right}px ${bottom}px ${left}px` };

  if(center)
    style = {...style, textAlign:"center"}

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default SpaceWrapper;
