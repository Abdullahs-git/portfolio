"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";

export default function ClientInteractions() {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <>
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
      <div className="relative z-10">
        <Navbar onOpenCommandPalette={() => setCmdPaletteOpen(true)} />
      </div>
    </>
  );
}
