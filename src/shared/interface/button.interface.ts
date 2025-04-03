import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "normal" | "outline" | "none"; // Ajoute d'autres variantes si nécessaire
  to?: string
}