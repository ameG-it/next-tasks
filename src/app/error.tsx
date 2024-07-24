"use client";

import React from "react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen flex flex-col text-center justify-center bg-slate-50">
      <h1 className="text-8xl text-gray-900 font-bold">Error</h1>
      <p className="text-4xl text-gray-900 font-medium">
        Unexpected error occured
      </p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
}
