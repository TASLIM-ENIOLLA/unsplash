import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="z-10 top-0 fixed left-0 w-full min-h-screen backdrop-blur-xs bg-background/70">
      <div className="h-full container">
        <div className="h-full mx-auto max-w-2xl">
          {children}
        </div>
      </div>
    </section>
  );
}