'use client'

import { useFormStatus } from "react-dom"

const AnalyseButton = () => {
    const {pending}= useFormStatus()
   

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg text-base font-medium transition-all duration-300"
    >
      {pending ? "Analyzing ..." : "Analyze"}
    </button>
  )
}

export default AnalyseButton