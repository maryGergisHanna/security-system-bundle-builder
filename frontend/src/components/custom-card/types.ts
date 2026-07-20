import type { ReactNode } from "react";

export interface TwoColumnLayoutProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

export interface CustomCardProps {
  children: ReactNode;
  className?: string;
}