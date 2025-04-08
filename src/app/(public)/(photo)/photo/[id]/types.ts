import { Basic } from "unsplash-js/dist/methods/photos/types";

export type Photo = Basic;

export interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export interface PhotoDisplayProps {
  photo: Photo;
}