'use client'

import { useState } from "react"

const YoutubeVideoDetails = ({videoId}:{
    videoId:string
}) => {
    const [videoId,setVideo]= useState<VideoDetails | null>()
  return (
    <div>YoutubeVideoDetails: {videoId}</div>
  )
}

export default YoutubeVideoDetails