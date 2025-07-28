// Usage.tsx
"use client";

import { FeatureFlag } from "@/feature/flags";
import {
  useSchematicEntitlement,
  useSchematicIsPending,
} from "@schematichq/schematic-react";

const Usage = ({
  featureFlag,
  title,
  children,            // ← new
}: {
  featureFlag: FeatureFlag;
  title: string;
  children?: React.ReactNode; // ← new
}) => {
  const isPending = useSchematicIsPending();
  const {
    featureAllocation,
    featureUsage,
    value: isFeatureEnabled,
  } = useSchematicEntitlement(featureFlag);

  const progress = ((featureUsage || 0) / (featureAllocation || 1)) * 100;

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl my-2 border border-zinc-800/50">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

      {isPending ? (
        <div className="flex justify-center items-center text-white text-center">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : !isFeatureEnabled ? (
        <p className="text-zinc-400 text-sm">
          Feature is disabled. Upgrade to enable it.
        </p>
      ) : (
        <>
          {/* Usage Display */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Progress</span>
                <span className="text-zinc-400 font-medium">
                  {featureUsage} / {featureAllocation}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          {progress >= 100 ? (
            <p className="text-red-500 text-sm mt-2">
              You have reached your usage limit.
            </p>
          ) : progress >= 80 ? (
            <p className="text-yellow-400 text-sm mt-2">
              Warning: You’re approaching your usage limit.
            </p>
          ) : (
            <p className="text-zinc-400 text-sm">
              Video analysis will begin once you start the process. Track your
              progress here.
            </p>
          )}

          {/* 👇  Empty-state / thumbnails / anything else */}
          {children}
        </>
      )}
    </div>
  );
};

export default Usage;