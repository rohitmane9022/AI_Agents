"use client";

import { getVideoDetails } from "@/action/getVideoDetails";
import { VideoDetails } from "@/types/types";
import { Calendar, Eye, ThumbsUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const YoutubeVideoDetails = ({ videoId }: { videoId: string }) => {
  const [video, setVideo] = useState<VideoDetails | null>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const video = await getVideoDetails(videoId);
      setVideo(video);
    };
    fetchVideoDetails();
  }, [videoId]);

  if (!video) {
    return (
      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mt-5 border border-zinc-800/50 flex justify-center items-center h-64 text-white text-center">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-2xl mt-3 border border-zinc-800/50">
      {/* Thumbnail */}
      <div className="aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="sm:text-2xl text-xl  font-bold text-white mb-6 leading-tight">
        {video.title}
      </h1>

      {/* Channel Info */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={video.channel.thumbnail}
          alt={video.channel.title}
          width={48}
          height={48}
          className="sm:w-12 sm:h-12 h-10 w-10 rounded-full border-2 border-white shadow-lg"
        />
        <div>
          <p className="font-semibold text-white text-base sm:text-lg">{video.channel.title}</p>
          <p className="text-zinc-400 text-sm">
            {video.channel.subscribers} Subscribers
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-6"></div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 grid-rows-1 gap-6">
        {/* Published Date */}
        <div className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-xl">
          <Calendar className="h-5 w-5 text-blue-400" />
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Published</p>
            <p className="font-semibold text-white">
              {new Date(video.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Views */}
        <div className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-xl">
          <Eye className="h-5 w-5 text-green-400" />
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Views</p>
            <p className="font-semibold text-white">{video.views}</p>
          </div>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-xl">
          <ThumbsUp className="h-5 w-5 text-purple-400" />
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Likes</p>
            <p className="font-semibold text-white">{video.likes}</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-xl">
          <MessageCircle className="h-5 w-5 text-orange-400" />
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Comments</p>
            <p className="font-semibold text-white">{video.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoDetails;
