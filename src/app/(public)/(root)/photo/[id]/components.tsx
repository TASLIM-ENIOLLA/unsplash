"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEscapeKey } from "@/hooks/use-escape-key";

import { PhotoDisplayCardProps } from "./types";

export function PhotoDisplayCard({ id, urls, user, width, height, description }: PhotoDisplayCardProps) {
  const router = useRouter();
  
  function closeDisplayCard() {
    router.back();
  }

  useEscapeKey(function () {
    closeDisplayCard();
  });
  
  return (
    <figure className="flex gap-10 h-full items-center">
      <div className="flex-none">
        <button type="button" className="size-12 block rounded-full bg-foreground text-background">
          <ChevronLeft size="30" className="mx-auto" />
        </button>
      </div>
      <div className="flex-1 max-h-full">
        <div className="flex flex-col justify-center">
          <div className="flex-none">
            <figure className="flex flex-col rounded-lg overflow-hidden bg-foreground">
              <div className="flex-none">
                <div className="z-0 relative">
                  <Image
                    width={width}
                    height={height}
                    src={urls.regular}
                    alt={String(description)}
                  />
                  <div className="top-0 left-0 absolute">
                    <div className="p-5">
                      <button
                        type="button"
                        className="size-8 rounded-full cursor-pointer bg-foreground"
                        onClick={closeDisplayCard}
                      >
                        <X size="20" className="mx-auto text-background" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <div className="p-5 text-background">
                  <h4 className="text-lg font-bold truncate">
                    <span className="capitalize">
                      {user.first_name} {user.last_name}
                    </span>
                  </h4>
                  <p className="truncate">
                    <span className="capitalize">
                      {user.location || "location N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <button type="button" className="size-12 block rounded-full bg-foreground text-background">
          <ChevronRight size="30" className="mx-auto" />
        </button>
      </div>
    </figure>
  );
}