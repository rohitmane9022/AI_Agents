import Form from "next/form"

import AnalyseButton from "./AnalyseButton"
import { analyseYoutubeVideo } from "@/action/analyseYoutubeVideo"

const YoutubeVideoForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <Form action={analyseYoutubeVideo}  className="flex flex-col sm:flex-row gap-2 items-center">
      <input className="h-12 w-full border-2 rounded-xl px-6 text-base bg-white/10 border-zinc-600 text-white placeholder:text-zinc-400 backdrop-blur-sm" name="url" type="text" placeholder="Enter Youtube URL" />
      <AnalyseButton/>
        </Form>  
    </div>
  )
}

export default YoutubeVideoForm