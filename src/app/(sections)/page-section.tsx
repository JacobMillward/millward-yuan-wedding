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
  className = "",
  ...props
}) => {
  return (
    <section
      className={`min-h-screen w-full ${background} bg-cover bg-center flex flex-col`}
      style={{
        backgroundImage: image && `url(${image})`,
      }}
      {...props}
    >
      <div className={`flex flex-col w-full grow ${className}`}>{children}</div>
    </section>
  );
};
