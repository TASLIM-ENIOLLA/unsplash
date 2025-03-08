"use client";

import { useEffect } from "react";

import { UseEscapeKeyProps } from "./types";

export function useEscapeKey(callback: UseEscapeKeyProps) {
  async function onKeyPress(this: Window, event: KeyboardEvent): Promise<any> {4
    if (event.key === "Escape") {
      if (typeof callback === "function") {
        await callback();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);

    return function () {
      window.removeEventListener("keydown", onKeyPress);
    }
  }, []);

  return;
}