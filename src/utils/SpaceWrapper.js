import React from "react";

const SpaceWrapper = ({ spacing, children, margin, center, ...props }) => {
 
  // No Spacing declared - funnels children
  if (!spacing) return <div {...props}>{children}</div>;

  // Pixel
  const top = Asigne(spacing.top);
  const right = Asigne(spacing.right);
  const bottom = Asigne(spacing.bottom);
  const left = Asigne(spacing.left);

  // Margin or Padding
  let style = MarginOrPadding(margin, top, right, bottom, left);

  // Center inline childs
  if (center) style = { ...style, textAlign: "center" };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default SpaceWrapper;

const Asigne = (value) => {
  if(!value) return "0px"
  if(value === "border") return "var(--border)";
  if(value === "verticalBorder") return "var(--verticalBorder)";
  if(value) return value + "px";
}

const MarginOrPadding = (margin, top, right, bottom, left) => {
  if(margin) return { margin: `${top} ${right} ${bottom} ${left}` };
  return { padding: `${top} ${right} ${bottom} ${left}` };
}
