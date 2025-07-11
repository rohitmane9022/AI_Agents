'use client'

import ThumnailGeneration from "@/components/ThumnailGeneration"
import Usage from "@/components/Usage"
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails"
import { FeatureFlag } from "@/feature/flags"
import { useParams } from "next/navigation"


const AnalysisPage = () => {
  const params= useParams<{videoId:string}>()
  const {videoId}= params
  return (
    <div className="w-full mx-auto md:px-28 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col gap-4 p-6">
            {/* Analysis Section */}
            <div className="flex flex-col gap-4">
              <Usage 
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyse Video"/>

              {/* Video Transcripition status */}
            </div>

            {/* Youtube Video Details */}
            <YoutubeVideoDetails videoId={videoId}/>
            {/* Thumbnail Generation */}
            <ThumnailGeneration />
            {/* Title */}
            {/* Transcripition */}
            <p className="text-white">Left side</p>
        </div>
        {/* Right Side */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[cal(100vh-6rem)]">
          <p className="text-white">Right side</p>
            {/* AI Chat */}
        </div>
        </div>
    </div>
  )
}

export default AnalysisPage