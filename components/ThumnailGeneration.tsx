'use client';

import Image from "next/image"
import Usage from "./Usage"
import { FeatureFlag } from "@/feature/flags"
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

const ThumbnailGeneration = ({videoId}:{videoId:string}) => {
  const { user } = useUser()
  const images= useQuery(api.images.getImages,{
    videoId,
    userId:user?.id ?? ""
  })
  // const images=[]

  return (
    <div className="rounded-xl mt-4 flex flex-col gap-4">
      <Usage
        featureFlag={FeatureFlag.TRANSCRIPTION}
        title="Thumbnail Generation"
      >
        {/* 👇  Everything below the progress bar lives here */}
        {images?.length ? (
          <div className="flex overflow-x-auto gap-4 mt-6">
            {images.map((image) =>
              image.url ? (
                <div
                  key={image._id}
                  className="flex-none w-[200px] h-[110px] rounded-lg overflow-hidden"
                >
                  <Image
                    loading="lazy"
                    src={image.url}
                    alt="Generated Image"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              ) : null
            )}
          </div>
        ) : (
          <div className="text-center py-8 px-4 rounded-lg border-2 border-dashed border-gray-200 mt-6">
            <p className="text-gray-500">No thumbnails have been generated yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Generate thumbnails to see them appear here
            </p>
          </div>
        )}
      </Usage>
    </div>
  );
};

export default ThumbnailGeneration;