import React from 'react';

const SpaceWrapper = ({ spacing, children, ...props }) => {
  /**
   * No Spacing declared - funnels children
   */
  if (!spacing) return children;

  const { top = spacing.top ? spacing.top : 0 } = spacing;
  const { right = spacing.right ? spacing.right : 0 } = spacing;
  const { bottom = spacing.bottom ? spacing.bottom : 0 } = spacing;
  const { left = spacing.left ? spacing.left : 0 } = spacing;

  return (
    <div
      style={{ margin: `${top}px ${right}px ${bottom}px ${left}px` }}
      {...props}
    >
      {children}
    </div>
  );

};

export default SpaceWrapper;
