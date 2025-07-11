'use client'

// import { useUser } from "@clerk/nextjs"
import Usage from "./Usage"
import { FeatureFlag } from "@/feature/flags"

const ThumnailGeneration = () => {
    // const {user}= useUser()

    // const images=[] //we pulling data from convex
  return (
    <div className="rounded-xl flex flex-col p-4">
      <div className="min-w-52">
      <Usage
          featureFlag={FeatureFlag.TRANSCRIPTION}
          title="Thumbnail Generation"
        />
      </div>
    </div>
  )
}

export default ThumnailGeneration
