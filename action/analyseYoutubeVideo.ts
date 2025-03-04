'use server'

import { redirect } from "next/navigation";

export const analyseYoutubeVideo=async(formData:FormData)=>{
    const url= formData.get("url")?.toString()

    if(!url) return;

     const videoId="abc"

     if(!videoId) return 

     redirect(`/video/${videoId}/analysis`)
}