import React, { type FC } from "react";
import NextJsLink from "next/link";

export const Link: FC<{
  children?: React.ReactNode;
  href: string;
  className?: string;
}> = ({ href, children, className = "" }) => (
  <NextJsLink
    className={`text-blue-600 visited:text-purple-600 hover:text-blue-800 hover:underline ${className}}`}
    href={href}
    referrerPolicy="no-referrer"
    target="_blank"
  >
    {children}
  </NextJsLink>
);
