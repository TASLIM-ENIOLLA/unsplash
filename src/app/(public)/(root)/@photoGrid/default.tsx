"use server";

import { revalidatePath } from "next/cache";
import { getPhotos } from "./actions";
import { PhotoGrid } from "./components";

export default async function Page(params: any) {
  const { searchParams } = await params;
  const { query } = await searchParams;

  const photos = await getPhotos(1, query);

  if(photos === undefined) {
    throw new Error("Failed to fetch photos, check your connectivity and try again.");
  }
  else if(photos.length < 1) {
    throw new Error("Empty photo list returned, modify your search keyword");
  }

  return (
    <PhotoGrid
      data={photos}
      query={query}
    />
  );
}