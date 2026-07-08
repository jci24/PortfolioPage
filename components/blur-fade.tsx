import type { CSSProperties, ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function BlurFade({ children, className, delay = 0 }: BlurFadeProps) {
  const style = {
    "--blur-fade-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div className={`blur-fade${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
