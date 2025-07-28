import SchematicComponent from "@/components/schematic/SchematicComponent";
// import { ClerkProvider } from "@clerk/nextjs";

function ManagePlan() {
  return (
    <div className="md:container mx-auto md:px-10 p-4 ">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Manage Your Plan</h2>
          <p className="text-zinc-400">Manage your subscription and billing details here.</p>
        </div>
        <SchematicComponent componentId='cmpn_YhDqztL5EvG'/>
        
    </div>
  );
}

export default ManagePlan;

