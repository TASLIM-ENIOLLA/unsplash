import { PageProps } from "./types";
import { getPhoto } from "./actions";
import { PhotoDisplayCard } from "./components";

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const photo = await getPhoto(id);

  if (photo === undefined) {
    throw new Error("Failed to fetch photos, check your connectivity and try again.");
  }

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="h-full flex-none">
        <div className="h-full py-20">
          <PhotoDisplayCard
            id={photo.id}
            urls={photo.urls}
            user={photo.user}
            width={photo.width}
            height={photo.height}
            description={photo.alt_description}
          />
        </div>
      </div>
    </div>
  );
}