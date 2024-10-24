"use client";

import { useContextTheme } from "@/context/ContextTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { type FC } from "react";

type LightDarkToggleProps = {
  className?: string;
};

const LightDarkToggle: FC<LightDarkToggleProps> = ({ className }) => {
  const { toggleTheme, theme } = useContextTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={() => toggleTheme()} className={className}>
          {theme === "dark" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
        </TooltipTrigger>
        <TooltipContent>
          {theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;