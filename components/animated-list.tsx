import { Children, type CSSProperties, type ReactNode } from "react";

type AnimatedListProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedList({
  children,
  className,
}: AnimatedListProps) {
  const items = Children.toArray(children);

  return (
    <div className={`animated-list${className ? ` ${className}` : ""}`}>
      {items.map((child, index) => {
        const style = {
          "--animated-list-delay": `${index * 28}ms`,
        } as CSSProperties;

        return (
          <div className="animated-list-item" key={`animated-list-item-${index}`} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
