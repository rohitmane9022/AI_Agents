// import AgentPulse from "@/components/AgentPulse";
import { Star } from "lucide-react";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, Image as ImageIcon, MessageSquare, Sparkles,Video } from 'lucide-react';


const features = [
  {
    title: "AI Analysis",
    description: "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
    icon: Brain,
  },
  {
    title: "Smart Transcription",
    description: "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
    icon: MessageSquare,
  },
  {
    title: "Thumbnail Generation",
    description: "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
    icon: ImageIcon,
  },
  {
    title: "Title Generation",
    description: "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with titles that resonate with your audience.",
    icon: MessageSquare,
  },
  {
    title: "Shot Script",
    description: "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips from successful content.",
    icon: Video,
  },
  {
    title: "Discuss with Your AI Agent",
    description: "Engage in deep conversations about your content strategy, brainstorm ideas, and unlock new creative possibilities with your AI agent companion.",
    icon: Sparkles,
  },
];

const steps = [
  {
    step: "01",
    title: "1. Connect Your Content",
    description: "Share your YouTube video URL and let your agent get to work",
    icon: Video,
  },
  {
    step: "02",
    title: "2. AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your content",
    icon: Brain,
  },
  {
    step: "03",
    title: "3. Receive Intelligence",
    description: "Get actionable insights and strategic recommendations",
    icon: MessageSquare,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero section */}
    <section className="h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
    <div className="container mx-auto px-4">
    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="flex flex-col items-center gap-10 text-center mt-20">
      
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-zinc-300 font-medium">Top rated SaaS</span>
          </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Meet Your Personal <span className="text-blue-500">AI <br /> Content Agent</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 leading-relaxed font-normal">
            Transform your video content with AI-powered analysis, transcription, and 
            insights. Get started in seconds.
          </p>


    <YoutubeVideoForm/>
      </div>
    </div>
    </section>
    
    {/* feature section */}

    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Powerful Feature for <span className="text-blue-500">Content Creators</span>
          </h2>
          
        </div>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="animate-on-scroll group p-8 bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    {/* How it work section */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Get started in seconds with our streamlined 3-step process designed for content creators and analysts.
          </p>
        </div>
        
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="animate-on-scroll relative text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent transform translate-x-8 z-0"></div>
                )}
                
                <div className="relative z-10">
                 
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  
             
                  <div className="w-16 h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 mx-auto border border-zinc-700/50">
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>
                  
                 
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed font-normal max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
    {/* Footer section */}
    <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Meet Your AI Content Agent?
        </h2>
        <p className="text-xl text-blue-50">
          Join creators leveraging AI to unlock content insights
        </p>
      </div>
    </section>
    </div>
  );
}
