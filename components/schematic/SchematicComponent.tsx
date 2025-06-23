import { getTemporaryAccessToken } from "@/action/getTemporaryAccessToken"
import { SchematicEmbed } from "./SchematicEmbed"


const SchematicComponent = async({componentId}:
    {componentId:string}
) => {
    if(!componentId){
       return null
    }
    const accessToken= await getTemporaryAccessToken()
    if(!accessToken){
        return new Error("Failed to get access token")
     }
  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />
}

export default SchematicComponent