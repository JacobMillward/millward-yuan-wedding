import Image, { StaticImageData } from "next/image";
import React from "react";

export enum SectionBackground {
  White = "bg-white",
  Blue = "bg-blue-200",
}

type Props = {
  background?: SectionBackground;
  image?: string;
  children: React.ReactNode;
  [x: string]: any;
};

export const PageSection: React.FC<Props> = ({
  children,
  background = SectionBackground.White,
  image,
  ...props
}) => {
  return (
    <section
      className={`h-screen w-full ${background} bg-cover bg-center`}
      style={{
        backgroundImage: image && `url(${image})`,
      }}
      {...props}
    >
      <div className="flex flex-col h-full w-full">{children}</div>
    </section>
  );
};
