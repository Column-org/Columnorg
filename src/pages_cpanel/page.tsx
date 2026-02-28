import React, { useEffect, useState } from "react";
import { 
  Ghost, 
  LayoutGrid, 
  Users, 
  FileText, 
  LifeBuoy, 
  LogOut, 
  MoreVertical,
  Plus,
  Menu,
  X
} from "lucide-react";

export default function CpanelPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // We hide the global header and footer on this page
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement;
    const footer = document.querySelector("footer") as HTMLElement;
    
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    
    return () => {
      // Restore on unmount
      if (header) header.style.display = "flex";
      if (footer) footer.style.display = "block";
    };
  }, []);

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-3 px-4 mb-12">
        <Ghost className="size-6 text-[#1A1A1A]" />
        <span className="font-semibold text-lg tracking-tight">Cpanel</span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/50 hover:text-black hover:bg-black/5 transition-all text-sm font-medium">
          <LayoutGrid className="size-5" />
          Your Apps
        </button>
        
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#4F3F85]/10 text-[#4F3F85] transition-all text-sm font-medium">
          <Users className="size-5" />
          Team Management
        </button>
      </nav>

      <nav className="flex flex-col gap-2 mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/50 hover:text-black hover:bg-black/5 transition-all text-sm font-medium">
          <FileText className="size-5" />
          Docs
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/50 hover:text-black hover:bg-black/5 transition-all text-sm font-medium">
          <LifeBuoy className="size-5" />
          Support
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/50 hover:text-black hover:bg-black/5 transition-all text-sm font-medium mt-2">
          <LogOut className="size-5" />
          Logout
        </button>
      </nav>
    </>
  );

  return (
    <div className="h-screen w-full bg-[#f4f4f4] text-[#1A1A1A] flex fixed inset-0 z-[999] overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[280px] h-full shrink-0 flex-col pt-8 pb-6 px-4">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[1000] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#f4f4f4] z-[1001] flex flex-col pt-8 pb-6 px-4 transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button 
          className="absolute top-6 right-4 p-2 rounded-xl hover:bg-black/5 text-black/50 hover:text-black transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="size-5" />
        </button>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 my-2 mr-2 ml-2 md:ml-0 rounded-[32px] flex flex-col bg-white border border-black/5 overflow-y-auto shadow-2xl relative">
        {/* Top Header */}
        <header className="h-16 md:h-20 flex items-center px-4 md:px-10 border-b border-black/5 shrink-0">
          {/* Mobile hamburger */}
          <button 
            className="md:hidden p-2 mr-3 rounded-xl hover:bg-black/5 text-black/50 hover:text-black transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <div className="flex items-center gap-3 text-[#1A1A1A]">
            <Users className="size-5 text-black/60 hidden md:block" />
            <span className="font-medium text-sm">Team Management</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 md:p-10 max-w-6xl mx-auto w-full mt-4 md:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-[#1A1A1A]">Team Management</h1>
              <p className="text-black/50 text-sm">Manage your team members and roles</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 bg-[#fddb35] hover:bg-[#e8c82b] text-black font-medium px-5 py-2.5 rounded-xl transition-colors text-sm shrink-0">
              <Plus className="size-4" />
              Invite Member
            </button>
          </div>

          {/* Table - Desktop */}
          <div className="w-full mt-6 md:mt-10 hidden md:block">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-black/5 text-xs font-medium text-black/40 uppercase tracking-wider">
              <div className="col-span-5">Email</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-3">Date Joined</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Table Row */}
            <div className="grid grid-cols-12 gap-4 px-6 py-5 items-center bg-transparent mt-4 rounded-2xl border border-black/5 shadow-sm">
              <div className="col-span-5 flex items-center gap-4">
                <div className="size-8 rounded-full bg-black/5 flex items-center justify-center text-sm font-medium text-[#1A1A1A]">
                  J
                </div>
                <span className="text-sm font-medium text-[#1A1A1A]">josephakpansunday@gmail.com (You)</span>
              </div>
              
              <div className="col-span-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#4F3F85]/10 text-[#4F3F85]">
                  Super Admin
                </span>
              </div>
              
              <div className="col-span-3">
                <span className="text-sm text-[#1A1A1A]/70">Feb 26, 2026</span>
              </div>
              
              <div className="col-span-2 flex justify-end">
                <button className="p-2 rounded-lg hover:bg-black/5 transition-colors text-black/50 hover:text-black">
                  <MoreVertical className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Table - Mobile Card */}
          <div className="w-full mt-6 md:hidden">
            <div className="rounded-2xl border border-black/5 shadow-sm p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-black/5 flex items-center justify-center text-sm font-semibold text-[#1A1A1A]">
                  J
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1A1A1A] truncate">josephakpansunday@gmail.com</p>
                  <p className="text-xs text-black/40 mt-0.5">(You)</p>
                </div>
                <button className="p-2 rounded-lg hover:bg-black/5 transition-colors text-black/50 hover:text-black shrink-0">
                  <MoreVertical className="size-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#4F3F85]/10 text-[#4F3F85]">
                  Super Admin
                </span>
                <span className="text-xs text-[#1A1A1A]/50">Feb 26, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
