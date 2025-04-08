"use client";

import React, { useEffect } from "react";

export function useEscapeKey(callback: (...args: any[]) => void): void {
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener("keyup", function(this: Window, event: KeyboardEvent) {
      if(event.key === "Escape" && typeof callback === "function") {
        callback();
      }
    }, controller);

    return function() {
      controller.abort();
    }
  }, []);

  return;
}