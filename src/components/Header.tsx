import { BarChart2, Settings, UserCircle } from "lucide-react";
import NavButton from "./NavButton";

interface HeaderProps {
  progress: number;
}

export default function Header({ progress }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 py-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-xl">Pomofocus</span>
        </div>
        <div className="flex items-center space-x-3">
          <NavButton icon={<BarChart2 size={18} />} label="Report" />
          <NavButton icon={<Settings size={18} />} label="Setting" />
          <NavButton icon={<UserCircle size={18} />} label="Sign In" />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-2xl h-2 bg-[#ffffff1a] rounded-full">
          <div
            className="h-full bg-[#ffffffcc] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
}
