"use client";

import { Search, ArrowLeft } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  
  function onFormReset(event: React.FormEvent<HTMLFormElement>): void {
    router.back();
  }

  return (
    <form action="./" onReset={onFormReset} className="p-3 w-full block border shadow-sm rounded-lg border-gray-300 bg-background dark:bg-foreground">
      <label className="flex gap-3 items-center text-foreground dark:text-background">
        <div className="flex-none">
          <button
            disabled={!query}
            type={query ? "reset" : "button"}
            className="block border-none cursor-pointer outline-none"
          >
            {
              query
              ? <ArrowLeft size="20" />
              : <Search size="20" />
            }
          </button>
        </div>
        <div className="flex-1">
          <input autoFocus autoCorrect="false"
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Type here to search..."
            className="w-full block border-none outline-none"
          />
        </div>
      </label>
    </form>
  );
}