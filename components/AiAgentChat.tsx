"use client";

import { useChat } from "@ai-sdk/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function AiAgentChat({ videoId }: { videoId: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
    body: {
      videoId,
    },
  });
  return (
    <div className="flex flex-col h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl my-2 border border-zinc-800/50">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">AI Agent</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Welcome to AI Agent Chat
                </h3>
                <p className="text-sm text-gray-500">
                  Ask any question about your video
                </p>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id} className="">
              <p className="text-white">{m.content}</p>
            </div>
          ))}
        </div>
      </div>
      {/* for Input */}
      <div className="">
        <div className="space-y-3 border-t border-zinc-800/50 pt-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter a question..."
              value={input} onChange={handleInputChange}
              className="flex-1 bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-400 rounded-lg px-3 py-2 text-sm focus:border-blue-500/50 focus:ring-blue-500/20"
            />
            <Button
              size="icon"
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-10 h-10 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed "
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AiAgentChat;
