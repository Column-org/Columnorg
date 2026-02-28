import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CpanelLogin() {
  // Hide the global header and footer on this page
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement;
    const footer = document.querySelector("footer") as HTMLElement;
    
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    
    return () => {
      if (header) header.style.display = "flex";
      if (footer) footer.style.display = "block";
    };
  }, []);

  return (
    <div className="h-screen w-full bg-[#f4f4f4] fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[min(90vh,640px)] bg-white rounded-[32px] shadow-2xl border border-black/5 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image */}
        <div className="hidden md:block md:w-1/2 h-full relative overflow-hidden">
          <img 
            src="/cpanel-login-art.png" 
            alt="Column Cpanel" 
            className="w-full h-full object-cover"
          />
          {/* Overlay with branding */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Column.png" alt="Column" className="h-8 w-auto" />
              <span className="text-white font-semibold text-lg">Column</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              The most advanced control panel for managing your decentralized applications on Movement.
            </p>
          </div>
        </div>

        {/* Right: Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 md:px-16">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 md:hidden">
            <img src="/Column.png" alt="Column" className="h-10 w-auto" />
            <span className="font-semibold text-xl text-[#1A1A1A]">Column</span>
          </div>

          <div className="w-full max-w-sm flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2 text-center">
              Welcome back
            </h1>
            <p className="text-black/50 text-sm mb-10 text-center">
              Sign in to access your Cpanel dashboard
            </p>

            {/* Google Sign In Button */}
            <button 
              className="w-full flex items-center justify-center gap-3 bg-white border border-black/10 hover:border-black/20 hover:bg-black/[0.02] rounded-2xl px-6 py-4 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <svg className="size-5 shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-black">
                Continue with Google
              </span>
            </button>

            {/* Footer */}
            <p className="mt-8 text-xs text-black/30 text-center leading-relaxed">
              By continuing, you agree to Column's{" "}
              <Link to="/privacy" className="underline hover:text-black/50 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
