'use client'

import { useFormStatus } from "react-dom"

const AnalyseButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 hover:bg-blue-700 text-white px-7 h-12 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
    >
      {pending && (
        <span className="loader border-white border-t-transparent border-[3px] rounded-full w-5 h-5 animate-spin"></span>
      )}
      {pending ? "Analyzing..." : "Analyze"}
    </button>
  )
}

export default AnalyseButton
