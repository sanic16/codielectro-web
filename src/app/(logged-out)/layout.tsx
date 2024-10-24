import { type PropsWithChildren } from "react";

type LoggedOutLayoutProps = PropsWithChildren;

export default function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <div className="flex flex-col min-h-[100vh] items-center justify-center p-24">
      {children}
    </div>
  );
}
