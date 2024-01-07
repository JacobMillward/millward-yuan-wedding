import React from "react";

export enum SectionBackground {
  White = "bg-white",
  Blue = "bg-blue-200",
}

type Props = {
  background?: SectionBackground;
  [x: string]: any;
};

export const PageSection: React.FC<Props> = ({
  children,
  background = SectionBackground.White,
  ...props
}) => {
  return (
    <section className={`flex h-screen ${background}`} {...props}>
      {children}
    </section>
  );
};
