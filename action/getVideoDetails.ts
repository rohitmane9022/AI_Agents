'use server'

import {google} from "googleapis"
import {VideoDetails} from "@/types/types"

const youtube= google.youtube({
    version:"v3",
    auth:process.env.YOUTUBE_API_KEY
})



export async function getVideoDetails(videoId: string) {
  console.log("Fetching youtube video", videoId)

  try {
    const videoResponse = await youtube.videos.list({
      part: ["statistics", "snippet"],
      id: [videoId]
    })

    const videoDetails = videoResponse.data.items?.[0]
    if (!videoDetails) throw new Error("Video not found")

    const channelResponse = await youtube.channels.list({
      part: ["statistics", "snippet"],
      id: [videoDetails.snippet?.channelId || ""]
    })

    const channelDetails = channelResponse.data.items?.[0] // ✅ FIXED

    console.log("🚀 Video details fetched successfully")

    const video: VideoDetails = {
      title: videoDetails.snippet?.title || "Unknown Title",
      thumbnail:
        videoDetails.snippet?.thumbnails?.maxres?.url ||
        videoDetails.snippet?.thumbnails?.high?.url ||
        videoDetails.snippet?.thumbnails?.default?.url ||
        "",
      publishedAt:
        videoDetails.snippet?.publishedAt || new Date().toISOString(),

      views: videoDetails.statistics?.viewCount || "0",
      likes: videoDetails.statistics?.likeCount || "Not Available",
      comments: videoDetails.statistics?.commentCount || "Not Available",

      channel: {
        title: videoDetails.snippet?.channelTitle || "Unknown Channel",
        thumbnail:
          channelDetails?.snippet?.thumbnails?.default?.url || "", // ✅ Will now work
        subscribers: channelDetails?.statistics?.subscriberCount || "0",
      },
    }

    return video

  } catch (error) {
    console.log("❌ Error fetching video details:", error)
    return null
  }
}



