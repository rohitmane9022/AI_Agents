'use server'

import getVideoIdFromVideoUrl from "@/lib/getVideoIdFromVideoUrl";
import { redirect } from "next/navigation";

export const analyseYoutubeVideo=async(formData:FormData)=>{
    const url= formData.get("url")?.toString()
    console.log(url+"Emty url")
 
    if(!url) return;

     const videoId=getVideoIdFromVideoUrl(url)

     console.log("videoId",videoId)

     if(!videoId) return 

     redirect(`/video/${videoId}/analysis`)
}