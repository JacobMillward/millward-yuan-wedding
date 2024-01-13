import ExportedImage from "next-image-export-optimizer";
import { type StaticImageData } from "next/image";
import React from "react";

export enum SectionBackground {
  White = "bg-white",
  Khaki = "bg-khaki",
}

type Props = {
  background?: SectionBackground;
  image?: StaticImageData | string;
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
      className={`relative w-full ${background} bg-cover bg-center flex flex-col`}
      {...props}
    >
      {image && (
        <ExportedImage
          src={image}
          alt="Background image"
          className="z-0"
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      )}
      <div className={`z-10 flex flex-col w-full grow ${className}`}>
        {children}
      </div>
    </section>
  );
};
