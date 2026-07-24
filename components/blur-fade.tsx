import type { CSSProperties, ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
};

export function BlurFade({ children, className }: BlurFadeProps) {
  const style = {
    "--blur-fade-delay": "0ms",
  } as CSSProperties;

  return (
    <div className={`blur-fade${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
