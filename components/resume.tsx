"use client";

import { Button } from "./ui/button";

export default function Resume() {
  return (
    <div className="hidden lg:block">
      <Button
        variant="outline"
        className="border-accent text-accent hover:bg-[var(--accent-color)]-10 
        mt-8 px-8 py-6 shimmer hover:text-text-accent hover-snappy-text 
        hover-snappy-shadow
        "
      >
        Resume
      </Button>
    </div>
  );
}
