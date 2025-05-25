"use client";
import FacebookIcon from "@/lib/icons/FacebookIcon";

export default function JoinGroupsStep() {
  return (
    <div className="space-y-6">
      {/* Header card (unchanged) */}
      <div className="rounded-xl bg-zinc-800/50 p-5 border border-zinc-700">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <FacebookIcon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              Join 3 Local Facebook Groups
            </h3>
            <p className="text-zinc-300 text-sm">
              This is the fastest way to get your first clients.
            </p>
          </div>
        </div>
      </div>

      {/* Instructional content */}
      <div className="space-y-6 text-zinc-300">
        <section className="space-y-3">
          <p>
            To get your first clients, you&apos;ll want to join local
            buy/sell/trade groups where people actively look for services like
            yours. These groups work best because:
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>People are already looking to hire services</li>
            <li>Members expect business promotions</li>
            <li>You can find customers in your area</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h4 className="font-medium text-white">
            How to find the right groups:
          </h4>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4 space-y-3">
            <p className="font-medium">Search Facebook for:</p>
            <div className="space-y-2">
              <div className="bg-zinc-800 px-3 py-2 rounded">
                &quot;buy sell trade [your city]&quot;
              </div>
              <div className="bg-zinc-800 px-3 py-2 rounded">
                &quot;[your city] services&quot;
              </div>
              <div className="bg-zinc-800 px-3 py-2 rounded">
                &quot;[your city] community&quot;
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h4 className="font-medium text-white">Great group examples:</h4>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">&#10003;</span>
                <span>Buy/Sell/Trade Austin, TX</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">&#10003;</span>
                <span>Round Rock Services &amp; Recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">&#10003;</span>
                <span>Pflugerville Friends &amp; Neighbors</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h4 className="font-medium text-white">Avoid these groups:</h4>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">&#10005;</span>
                <span>Hobby groups (like &quot;Austin Dog Lovers&quot;)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">&#10005;</span>
                <span>Groups that ban business posts</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">&#10005;</span>
                <span>Inactive groups (no posts in last month)</span>
              </li>
            </ul>
          </div>
        </section>

        <p className="text-sm text-zinc-400 pt-2">
          Once you&apos;ve joined 3 good groups, mark this step complete and
          we&apos;ll help with your first post.
        </p>
      </div>
    </div>
  );
}
