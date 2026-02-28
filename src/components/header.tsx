
import { ButtonLink } from "@/common/button";
/* import Image from next removed */;
import { DesktopMenu, MobileMenu, HeaderProps } from "./navigation-menu";
import { ChevronDown, Github, QrCode, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const STATIC_HEADER_DATA: HeaderProps = {
  navbar: {
    items: [
      { _id: "1", _title: "Features", href: "/#features", sublinks: { items: [] } },
      { _id: "2", _title: "Partners", href: "/#partners", sublinks: { items: [] } },
      { _id: "3", _title: "FAQ", href: "/#faq", sublinks: { items: [] } },
    ],
  },
  rightCtas: {
    items: [
      {
        _id: "cta1",
        href: "https://github.com/NileDex",
        label: "GitHub",
        type: "secondary",
        icon: <Github className="size-4" />,
      },
    ],
  },
};

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
        setIsDownloadOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync header background with page background transition
  const headerBg = useTransform(
    scrollYProgress,
    [0.8, 0.95],
    ["rgba(255, 255, 255, 0)", "rgba(255, 247, 234, 0)"]
  );

  return (
    <motion.header 
      style={{ backgroundColor: headerBg }}
      className="fixed left-0 top-0 z-[110] flex w-full flex-col pt-6 transition-all duration-300"
    >
      <div className="container mx-auto flex w-full items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center w-[200px]">
          <Link className="flex items-center gap-3 ring-offset-2" to="/">
            <img
              alt="Logo"
              src="/Column.png"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
        
        {/* Center: Floating Navigation Island */}
        <div className="hidden md:flex items-center justify-center bg-[--surface-secondary] rounded-full px-2 py-1.5">
          <nav className="flex items-center gap-1">
            <div className="relative group">
              <Link to="/#features" className="px-4 py-2 text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface-tertiary] rounded-full transition-colors flex items-center gap-1">
                Features <ChevronDown className="size-3.5 opacity-70 transition-transform duration-200 group-hover:-rotate-180" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[120]">
                {/* Bridge to prevent gap hovering issues */}
                <div className="absolute -top-2 left-0 right-0 h-6 bg-transparent" />
                <div className="flex w-40 flex-col items-center rounded-2xl bg-[--surface-primary] py-2 shadow-xl shadow-black/5 border border-[--border] dark:border-[--dark-border]">
                  <Link to="/#start-here" className="w-[calc(100%-16px)] rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[--text-primary] hover:bg-[--surface-secondary] transition-colors">
                    Start here.
                  </Link>
                  <Link to="/cpanel" className="w-[calc(100%-16px)] rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[--text-primary] hover:bg-[--surface-secondary] transition-colors">
                    Column C-Panel
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/#learn" className="px-4 py-2 text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface-tertiary] rounded-full transition-colors flex items-center gap-1">
                Learn <ChevronDown className="size-3.5 opacity-70 transition-transform duration-200 group-hover:-rotate-180" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[120]">
                {/* Bridge to prevent gap hovering issues */}
                <div className="absolute -top-2 left-0 right-0 h-6 bg-transparent" />
                <div className="flex w-36 flex-col items-center rounded-2xl bg-[--surface-primary] py-2 shadow-xl shadow-black/5 border border-[--border] dark:border-[--dark-border]">
                  <a href="#" className="w-[calc(100%-16px)] rounded-xl px-4 py-2.5 text-left text-sm font-medium text-[--text-primary] hover:bg-[--surface-secondary] transition-colors">
                    M1 Docs
                  </a>
                </div>
              </div>
            </div>
            <Link to="/#developers" className="px-4 py-2 text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface-tertiary] rounded-full transition-colors flex items-center gap-1">
              Developers <ChevronDown className="size-3.5 opacity-70" />
            </Link>
            <Link to="/#support" className="px-4 py-2 text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface-tertiary] rounded-full transition-colors cursor-pointer">
              Support
            </Link>
          </nav>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-3 md:w-[200px]">
          <a 
            href="https://github.com/NileDex" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[--text-secondary] hover:text-[--text-primary] transition-colors p-2 hidden sm:block"
          >
            <Github className="size-5" />
          </a>
          
          <div className="relative" ref={downloadRef}>
            <button 
              onClick={() => setIsDownloadOpen(!isDownloadOpen)}
              className="rounded-full bg-[#fddb35] hover:bg-[#e8c82b] text-black font-semibold px-4 md:px-6 py-2 md:py-2.5 transition-colors text-sm md:text-base"
            >
              Download
            </button>
            
            <AnimatePresence>
              {isDownloadOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-[calc(100%+12px)] w-[280px] rounded-2xl bg-[--surface-primary] p-6 flex flex-col items-center gap-4"
                >
                  <h4 className="text-xl font-bold tracking-tight text-[--text-primary]">
                    Coming Soon
                  </h4>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-black/5">
                    <QrCode className="size-32 text-black" />
                  </div>
                  <p className="text-sm text-center text-[--text-secondary] font-medium mt-1">
                    Scan to get notified when the app is ready for download.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-[--text-secondary] hover:text-[--text-primary]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[80px] bg-[--surface-primary] z-50 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8">
              <nav className="flex flex-col gap-6 text-2xl font-medium text-[--text-primary]">
                <div className="flex flex-col gap-2">
                  <Link to="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link to="/#start-here" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-[--text-secondary]">Start here.</Link>
                    <Link to="/cpanel" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-[--text-secondary]">Column C-Panel</Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/#learn" onClick={() => setIsMobileMenuOpen(false)}>Learn</Link>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-[--text-secondary]">M1 Docs</a>
                  </div>
                </div>
                <Link to="/#developers" onClick={() => setIsMobileMenuOpen(false)}>Developers</Link>
                <Link to="/#support" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
                
                <div className="h-px bg-[--border] w-full my-4" />
                
                <a href="https://github.com/NileDex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[--text-secondary]">
                  <Github className="size-8" /> 
                  <span>GitHub</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
