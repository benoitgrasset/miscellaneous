import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Slot, type AsChildProps } from "./Slot";

type ButtonVariant = "primary" | "secondary" | "danger";

type Props = AsChildProps<
  {
    variant?: ButtonVariant;
    children: ReactNode;
  },
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({
  variant = "primary",
  children,
  className,
  asChild,
  ...props
}: Props) {
  const Component = asChild ? Slot : "button";
  return (
    <Component className={`btn btn-${variant}`} {...props}>
      {children}
    </Component>
  );
}
