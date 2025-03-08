"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  if(query) return (
    <section className="pb-7">
      <div className="container">
        <div className="text-foreground">
          <h4 className="text-3xl/10 font-bold">
            <span className="sentence">
              Showing search results for&nbsp;
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              "{query}"
            </span>
          </h4>
        </div>
      </div>
    </section>
  );

  return;
}