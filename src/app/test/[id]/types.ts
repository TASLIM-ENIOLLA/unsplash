import { Basic } from "unsplash-js/dist/methods/photos/types";

export type Photo = Basic;

export type PhotoDisplayCardProps = Pick<Photo, "id" | "urls" | "user" | "width" | "height" | "description">;

export type PageProps = {
  params: Promise<{
    id: string;
  }>
}

export type LayoutProps = {
  children: React.ReactNode;
}

export type ErrorProps = {
  error: Error;
  reset: () => any;
}