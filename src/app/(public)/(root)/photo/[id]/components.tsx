"use client";

import { ChevronLeft } from "lucide-react";

export function PhotoDisplayCard() {
  return (
    <figure className="flex h-full gap-10 items-center">
      <div className="flex-none">
        <button type="button" className="block size-12 rounded-full bg-foreground">
          <ChevronLeft size="20" className="mx-auto text-background" />
        </button>
      </div>
      <div className="flex-1 border">
        <div className="my-10 bg-foreground rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <div className="flex-1">
              <div className="h-96" />
            </div>
            <div className="flex-none">
              <div className="p-5 text-background">
                <h4 className="text-lg font-bold truncate">
                  <span className="capitalize">
                    taslim musa-azeez
                  </span>
                </h4>
                <p className="truncate">
                  <span className="capitalize">
                    nigeria
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <button type="button" className="block size-12 rounded-full bg-foreground">
          <ChevronLeft size="20" className="mx-auto text-background" />
        </button>
      </div>
    </figure>
  );
}