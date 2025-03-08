"use client";

import { ErrorProps } from "./types";

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="py-10">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <div className="space-y-10">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-red-500">
                  <span className="sentence">
                    oops, an error has occured!
                  </span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <span className="sentence">
                    {error.message}
                  </span>
                </p>
              </div>
              <button type="button" onClick={reset} className="py-3 px-10 border rounded-lg dark:bg-foreground dark:text-background">
                <span className="capitalize ">
                  reload
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}