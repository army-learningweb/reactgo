
import { SidebarLink } from "./SidebarLink";

export default function Sidebar({ className }) {
  return (
    <aside className={`w-[15%] px-3 bg-white min-h-screen ${className}`}>
      {/* logo */}
      <div className="flex gap-2 items-center mt-5">
        <div className="text-blue-600 text-2xl font-bold tracking-tight ms-2">
          React exercise
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1 text-sm">
        <SidebarLink to="/" name="Freelancer"/>
        <SidebarLink to="/todoapp" name="Todo APP"/>
        <SidebarLink to="/counterapp" name="Counter APP"/>
        <SidebarLink to="/arrcordian" name="Arrcordian"/>
        <SidebarLink to="/timerclock" name="Timer Clock"/>
        <SidebarLink to="/countdownotp" name="Countdown OTP"/>
        <SidebarLink to="/inputpassword" name="Input Password"/>
        <SidebarLink to="/stickyheader" name="StickyHeader"/>
        <SidebarLink to="/debouncesearch" name="DebounceSearch"/>
        <SidebarLink to="/simpleinfinitescrolllist" name="Simple Infinity Scrool"/>
        <SidebarLink to="/pages" name="Pages"/>
      </div>
    </aside>
  );
}
