"use client";

import { useTheme } from "@hooks";
import React from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useTheme();
  return children;
};
