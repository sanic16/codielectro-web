"use client";
import dynamic from "next/dynamic";
import { FC, PropsWithChildren } from "react";

const ContextThemeProvider = dynamic(() => import("@/context/ContextTheme"), {
  ssr: false,
});

type ContextProvidersProps = PropsWithChildren;

const ContextProviders: FC<ContextProvidersProps> = ({ children }) => {
  return <ContextThemeProvider>{children}</ContextThemeProvider>;
};

export default ContextProviders;