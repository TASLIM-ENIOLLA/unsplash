"use server";

import { unsplash } from "@/libs/unsplash";

import { Photo } from "./types";

export async function getPhoto(id: string): Promise<Photo | undefined> {
  try {
    const response = await unsplash.photos.get({ photoId: id });
    const result = response.response;
  
    return result;
  }
  catch (error: unknown) {
    throw new Error("Failed to fetch photo, check your connectivity and try again.");
  }
}