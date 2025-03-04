import Form from "next/form"

import AnalyseButton from "./AnalyseButton"
import { analyseYoutubeVideo } from "@/action/analyseYoutubeVideo"

const YoutubeVideoForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form action={analyseYoutubeVideo}  className="flex flex-col sm:flex-row gap-2 items-center">
      <input className="flex-1 w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" name="url" type="text" placeholder="Enter Youtube URL" />
      <AnalyseButton/>
        </Form>  
    </div>
  )
}

export default YoutubeVideoForm