// "use client";

// import { useState } from "react";
// import { Service } from "@/app/features/Onboarding/types/brandKit.type";
// import { SparklesIcon, LockClosedIcon } from "@heroicons/react/24/solid";

// interface Props {
//   userServices: Service[];
//   suggestedServices: Service[];
// }

// export default function LockedServices({
//   userServices,
//   suggestedServices,
// }: Props) {
//   const [tab, setTab] = useState<"user" | "ai">(
//     userServices.length > 0 ? "user" : "ai"
//   );

//   const visibleSuggested = suggestedServices.slice(0, 2);
//   const lockedCount = Math.max(
//     0,
//     6 - visibleSuggested.length - userServices.length
//   );

//   const activeServices = tab === "user" ? userServices : visibleSuggested;

//   return (
//     <section className="mb-10">
//       <h3 className="text-xl font-semibold text-white mb-4">
//         Services You Can Offer
//       </h3>

//       <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
//         {/* Top Section */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//           {/* Left: Tabs + Description */}
//           <div className="space-y-2">
//             <div className="flex gap-3">
//               {userServices.length > 0 && (
//                 <button
//                   onClick={() => setTab("user")}
//                   className={`text-sm px-4 py-1.5 rounded-md border transition ${
//                     tab === "user"
//                       ? "bg-blue-900 border-blue-500 text-white shadow-md"
//                       : "border-zinc-700 text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   Your Services
//                 </button>
//               )}
//               {suggestedServices.length > 0 && (
//                 <button
//                   onClick={() => setTab("ai")}
//                   className={`text-sm px-4 py-1.5 rounded-md border transition ${
//                     tab === "ai"
//                       ? "bg-blue-900 border-blue-500 text-white shadow-md"
//                       : "border-zinc-700 text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   Recommended Services
//                 </button>
//               )}
//             </div>

//             <p className="text-sm text-gray-400 max-w-lg">
//               {tab === "user"
//                 ? "These are the services you've added to your kit."
//                 : "Based on your business, here are some services we suggest to help you earn more."}
//             </p>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {activeServices.map((s, i) => (
//             <div
//               key={`${tab}-${i}`}
//               className="relative bg-zinc-900 border border-gray-700 rounded-xl px-4 py-3 text-white flex justify-between items-center"
//             >
//               <div>
//                 <p className="font-medium">{s.name}</p>
//                 <p className="text-blue-400 font-semibold">${s.price}</p>
//               </div>

//               {tab === "ai" && (
//                 <SparklesIcon className="w-5 h-5 text-yellow-300" />
//               )}
//             </div>
//           ))}

//           {/* Locked Service Slots */}
//           {tab === "ai" &&
//             Array.from({ length: lockedCount }).map((_, i) => (
//               <div
//                 key={`locked-${i}`}
//                 className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border border-dashed border-gray-700 rounded-xl text-sm text-gray-500"
//               >
//                 <div className="flex items-center gap-2">
//                   <LockClosedIcon className="w-4 h-4 text-gray-500" />
//                   <span>Locked service suggestion</span>
//                 </div>
//                 <span className="text-xs text-gray-400">Upgrade to unlock</span>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
