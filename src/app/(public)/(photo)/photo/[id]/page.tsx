import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageProps } from "./types";
import { getPhoto } from "./actions";
import { PhotoDisplay } from "./components";

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const photo = await getPhoto(id);

  if(!photo) {
    throw new Error("Failed to fetch photo data!");
  }
  
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <PhotoDisplay photo={photo} />
          </div>
        </div>
      </div>
    </section>
  );
}