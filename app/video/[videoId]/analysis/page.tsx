'use client'

import Usage from "@/components/Usage"
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails"
import { FeatureFlag } from "@/feature/flags"
import { useParams } from "next/navigation"


const AnalysisPage = () => {
  const params= useParams<{videoId:string}>()
  const {videoId}= params
  return (
    <div className="xl:container mx-auto px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col gap-4 bg-white lg:border border-gray-200 p-6">
            {/* Analysis Section */}
            <div>
              <Usage 
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyse Video"/>

              {/* Video Transcripition status */}
            </div>

            {/* Youtube Video Details */}
            <YoutubeVideoDetails videoId={videoId}/>
            {/* Thumbnail Generation */}
            {/* Title */}
            {/* Transcripition */}
            <p>Left side</p>
        </div>
        {/* Right Side */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[cal(100vh-6rem)]">
          <p>Right side</p>
            {/* AI Chat */}
        </div>
        </div>
    </div>
  )
}

export default AnalysisPage