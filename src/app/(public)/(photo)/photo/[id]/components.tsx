"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { X } from "lucide-react";

import { useEscapeKey } from "./hooks";
import { PhotoDisplayProps } from "./types";

export function PhotoDisplay({ photo }: PhotoDisplayProps) {
  const router = useRouter();
  
  useEscapeKey(function() {
    goBack();
  });

  function goBack(): void {
    router.push("../../");
  }

  return (
    <div className="rounded-xl overflow-hidden bg-foreground">
      <div style={{
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${photo?.urls.regular})`
      }}>
        <div className="h-96 relative backdrop-blur">
          <Image fill
            objectFit="contain"
            objectPosition="center"
            src={photo?.urls.regular || ""}
            alt={photo?.description || photo?.alt_description || ""}
          />
          <div className="top-0 left-0 absolute">
            <div className="p-3">
              <button type="button" onClick={goBack} className="p-3 rounded-full cursor-pointer bg-foreground">
                <X size="20" className="mx-auto block text-background" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 text-background">
        <h4 className="text-lg font-bold truncate">
          <span className="capitalize">
            {photo?.user.first_name} {photo?.user.last_name}
          </span>
        </h4>
        <p className="truncate">
          <span className="capitalize">
            {photo?.user.location || "location N/A"}
          </span>
        </p>
      </div>
    </div>
  );
}