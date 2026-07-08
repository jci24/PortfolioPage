import { Children, type CSSProperties, type ReactNode } from "react";

type AnimatedListProps = {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
};

export function AnimatedList({
  children,
  className,
  staggerMs = 90,
}: AnimatedListProps) {
  const items = Children.toArray(children);

  return (
    <div className={`animated-list${className ? ` ${className}` : ""}`}>
      {items.map((child, index) => {
        const style = {
          "--animated-list-delay": `${index * staggerMs}ms`,
        } as CSSProperties;

        return (
          <div className="animated-list-item" key={index} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
