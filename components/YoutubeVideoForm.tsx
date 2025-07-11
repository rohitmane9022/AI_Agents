"use client"

import { useState } from "react"
import Form from "next/form"
import AnalyseButton from "./AnalyseButton"
import { analyseYoutubeVideo } from "@/action/analyseYoutubeVideo"

const YoutubeVideoForm = () => {
  const [url, setUrl] = useState("")
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!url.trim()) {
      e.preventDefault()
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <Form
        action={analyseYoutubeVideo}
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 items-center "
      >
        <input
          name="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Youtube URL"
          className={`h-12 w-full border-[1px] rounded-xl px-6 text-base bg-white/10 
            ${isError ? "border-red-500" : "border-zinc-600"} 
            text-white placeholder:text-zinc-400 backdrop-blur-sm`}
        />
        <AnalyseButton />
      </Form>
    </div>
  )
}

export default YoutubeVideoForm
