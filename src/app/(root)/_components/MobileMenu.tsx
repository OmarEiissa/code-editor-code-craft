"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const mounted = useMounted();
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const currentTheme = THEMES.find((t) => t.id === theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      (event) => event.key === "Escape" && setIsOpen(false)
    );
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-2 py-0.5 bg-[#1e1e2e]/80 hover:bg-[#262637] rounded-lg transition-all duration-200 border border-gray-800/50 hover:border-gray-700 outline-none"
      >
        <Menu className="size-6 text-gray-400 lg:hidden hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 flex flex-col items-center gap-2 mt-2 w-full min-w-[240px] bg-[#1f1e2e] backdrop-blur-xl rounded-xl border border-[#313244] shadow-2xl py-2 z-50"
          >
            <div className="px-2 pb-2 w-full text-center border-b border-gray-800/50">
              <p className="text-xs font-medium text-gray-400">Menu</p>
            </div>

            <Link
              href="/snippets"
              className="relative group flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 w-full border-b border-gray-800/50"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-active:opacity-100 transition-opacity" /> */}
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
