import { SearchBar } from "./components";

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-xl">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}