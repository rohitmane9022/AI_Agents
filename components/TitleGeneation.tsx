import { useUser } from "@clerk/nextjs";
import Usage from "./Usage";
import { FeatureFlag } from "@/feature/flags";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { Copy } from "lucide-react";

const TitleGeneation = ({ videoId }: { videoId: string }) => {
  const { user } = useUser();
  const titles:{title:string,_id:string}[] = [];

  console.log(user,titles, videoId)

  const { value: isTitleGenerationEnabled } = useSchematicEntitlement(
    FeatureFlag.TITLE_GENERATIONS
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // toast.success("Copied to clipboard")
  };

  return (
    <div>
      <Usage featureFlag={FeatureFlag.TITLE_GENERATIONS} title="Titles">
        <div>
          {titles?.map((title) => (
            <div
              key={title._id}
              className="group relative p-4 rounded-lg border border-gray-100 hover:border-blue-100 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm text-gray-900 leading-relaxed">
                  {title.title}
                </p>
                <button
                  onClick={() => copyToClipboard(title.title)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-blue-100 rounded-md"
                  title="Copy to clipboard"
                >
                  <Copy className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No titles generated yet */}
        {!titles?.length && !!isTitleGenerationEnabled && (
          <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200">
            <p className="text-gray-500">No titles have been generated yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Generate titles to see them appear here
            </p>
          </div>
        )}
      </Usage>
    </div>
  );
};

export default TitleGeneation;
