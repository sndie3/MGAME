import React from "react";

function Invite() {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide animate-pulse">
          Invite - Coming Soon
        </h1>

        <p className="mt-5 text-md text-gray-500">
          We're working on something exciting.
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Stay tuned for updates!
        </p>

        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"></span>
          <span
            className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Invite;