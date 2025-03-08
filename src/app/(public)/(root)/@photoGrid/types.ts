import { Basic } from "unsplash-js/dist/methods/photos/types";

export type Photo = Basic;

export type PhotoCardProps = Pick<Photo, "id" | "urls" | "user" | "width" | "height" | "description">;

export type PhotoGridProps = {
  data: Photo[];
  query: string;
}

export type ErrorProps = {
  error: Error;
  reset: () => any;
}