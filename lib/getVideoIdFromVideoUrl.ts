

const getVideoIdFromVideoUrl = (url:string): string | null => {
  let videoId: string | null = null
    //For Normal Video 
  if(url.includes("youtu.be/")){
    videoId= url.split("youtu.be/")[1]?.split("/[?#]/") [0] || null
  }
  // For Shorts Video
  else if(url.includes("youtube.com/shorts/")){
    videoId= url.split("youtu.be/")[1]?.split("/[?#]/") [0] || null
  }
  // For Watch Later Video
  else if(url.includes("v=")){
    videoId= url.split("v=")[1]?.split("&")[0] || null
  }

  return videoId
}

export default getVideoIdFromVideoUrl