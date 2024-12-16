import {BarChart2, Settings, UserCircle} from "lucide-react";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-white rounded-sm" />
        <span className="text-white font-bold text-xl">Pomofocus</span>
      </div>
      <div className="flex items-center space-x-3">
        <NavButton icon={<BarChart2 size={18} />} label="Report" />
        <NavButton icon={<Settings size={18} />} label="Setting" />
        <NavButton icon={<UserCircle size={18} />} label="Sign In" />
      </div>
    </header>
  );
}
