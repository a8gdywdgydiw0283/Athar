"use client";

import { useEffect } from "react";
import { SCROLL_POSITION_KEY } from "./LanguageToggle";

export default function ScrollRestoration() {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_POSITION_KEY);
    if (saved === null) return;

    const y = parseInt(saved, 10);
    sessionStorage.removeItem(SCROLL_POSITION_KEY);

    requestAnimationFrame(() => {
      window.scrollTo(0, y);
    });
  }, []);

  return null;
}
