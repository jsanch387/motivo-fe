"use client";

import Button from "@/app/components/ui/Button";
import { CheckCircle } from "lucide-react";
import Card from "@/app/components/ui/Card"; // ✅ your shared Card component

export default function StarterKitProgress({
  progress,
  isCompleted,
  onClick,
}: {
  progress: number;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <Card className="mb-10">
      {" "}
      {/* ✅ Replaces the custom wrapper */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold">Your Brand Kit Progress</h2>
        <span className="text-sm text-gray-400 flex items-center gap-1">
          {isCompleted ? (
            <>
              <CheckCircle className="text-green-400" size={16} />
              <span className="text-green-400">Completed</span>
            </>
          ) : (
            `${progress} of 6 steps complete`
          )}
        </span>
      </div>
      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            isCompleted
              ? "bg-green-500"
              : "bg-gradient-to-r from-blue-500 to-purple-500"
          }`}
          style={{ width: `${(progress / 6) * 100}%` }}
        ></div>
      </div>
      <div className="mt-4 text-right">
        <Button type="secondary" size="sm" onClick={onClick}>
          Go to Brand Kit
        </Button>
      </div>
    </Card>
  );
}
