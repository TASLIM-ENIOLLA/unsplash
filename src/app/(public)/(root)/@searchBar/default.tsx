import { SearchBar } from "./components";

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-xl space-y-1">
          <SearchBar />
          <p className="text-right text-foreground">
            Designed and developed by Taslim Eniolla.
          </p>
        </div>
      </div>
    </section>
  );
}