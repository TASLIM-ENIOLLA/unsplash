import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="py-10">
      <div className="container">
        <div className="text-center text-foreground">
          <div className="space-y-5">
            <Loader size="50" className="mx-auto animated animate-spin" />
            <p className="text-slate-600 dark:text-slate-300">
              <span className="sentence">
                loading photo...
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}