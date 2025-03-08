"use client";

import { Loader } from "lucide-react";
import { Fragment, useEffect, useState, useTransition } from "react";

import Link from "next/link";
import Image from "next/image";

import { getPhotos } from "./actions";
import { Photo, PhotoGridProps, PhotoCardProps } from "./types";

export function PhotoCard({ id, urls, user, width, height, description }: PhotoCardProps) {
  return (
    <Link href={`/photo/${id}`}>
      <figure title={String(description)} className="mb-10 shadow-lg rounded-lg overflow-hidden bg-foreground">
        <div className="z-0 relative">
          <Image
            width={width}
            height={height}
            src={urls.regular}
            alt={String(description)}
          />
          <div className="z-0 top-0 left-0 h-full w-full absolute pointer-events-none">
            <div className="h-full bg-gradient-to-b from-60% to-foreground">
              <div className="flex h-full flex-col justify-end">
                <div className="flex-col">
                  <div className="p-3 text-background">
                    <h4 className="text-lg font-bold truncate">
                      <span className="capitalize">
                        {user.first_name} {user.last_name}
                      </span>
                    </h4>
                    <p className="truncate">
                      <span className="capitalize">
                        {user.location || "Location N/A"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </Link>
  );
}

export function PhotoGrid({ data, query }: PhotoGridProps) {
  const [photos, setPhotos] = useState <Photo[]> (data);
  const [pageNumber, setPageNumber] = useState<number>(2);
  
  const [isLoadingMore, startLoadingMore] = useTransition();

  function loadMore(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    startLoadingMore(async function () {
      const morePhotos = await getPhotos(pageNumber, query);

      if(morePhotos) {
        setPhotos((photos) => ([
          ...photos,
          ...morePhotos
        ]));
  
        setPageNumber((pageNumber) => pageNumber + 1);
      }
    });
  }

  useEffect(() => setPhotos(data), [data]);

  useEffect(() => {
    return function () {
      setPhotos(data);
      setPageNumber(2);
    }
  }, []);

  return (
    <section className="pb-20">
      <div className="container">
        <div className="columns-2xs gap-10">
          {photos.map((photo: Photo, index: number) => (
            <Fragment key={[index, photo.id].join("-")}>
              <PhotoCard
                id={photo.id}
                urls={photo.urls}
                user={photo.user}
                width={photo.width}
                height={photo.height}
                description={photo.alt_description}
              />
            </Fragment>
          ))}
        </div>
        {Boolean(photos.length) && (
          <div className="pt-10 text-center">
            <button
              type="button"
              className="py-3 px-10 border rounded-lg dark:bg-foreground dark:text-background"
              onClick={loadMore}
            >
              {
                isLoadingMore
                ? <Loader size="20" className="animated animate-spin" />
                : <span className="font-bold capitalize">load more</span>
              }
            </button>
          </div>
        )}
      </div>
    </section>
  );
}