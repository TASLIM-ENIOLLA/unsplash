"use server";

import { unsplash } from "@/libs/unsplash";

import { Photo } from "./types";
import { revalidatePath } from "next/cache";

export async function getPhotos(pageNumber: number = 1, query: string): Promise<undefined | Photo[]> {
  try {
    if(query) {
      const params = {
        query,
        perPage: 10,
        page: pageNumber,
      }

      const response = await unsplash.search.getPhotos(params);
      const results = response.response?.results;

      return results;
    }
    else {
      const response = await unsplash.photos.list({ page: pageNumber, perPage: 10 });
      const results = response.response?.results;
  
      return results;
    }
  }
  catch (error: unknown) {
    throw new Error("Failed to fetch photos, check your connectivity and try again.");
  }
}