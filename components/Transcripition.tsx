"use client";

import { FeatureFlag } from "@/feature/flags";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { useState } from "react";
import Usage from "./Usage";

interface TranscriptEntry {
  text: string;
  timestamp: string;
}

const Transcripition = ({ videoId }: { videoId: string }) => {
    
  const [transcript] = useState<{
    transcript: TranscriptEntry[];
    cache: string;
  } | null>(null);

  console.log(videoId)

  const {featureUsageExceeded}= useSchematicEntitlement(
    FeatureFlag.TRANSCRIPTION
  )

  return (
    <div className="">
        <Usage featureFlag={FeatureFlag.TRANSCRIPTION} title="Transcripition">
         {!featureUsageExceeded ?(
            <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto rounded-md p-4">
                {
                    transcript ? (
                        transcript.transcript.map((entry, index) => (
                          <div key={index} className="flex gap-2">
                            <span className="text-sm text-gray-400 min-w-[50px]">
                              {entry.timestamp}
                            </span>
                            <p className="text-sm text-gray-700">{entry.text}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No transcription available</p>
                      )
                      
                }
            </div>
         ):null}
        </Usage>
    </div>
  );
};

export default Transcripition;
