import {ReactNode} from "react";

interface NavButtonProps {
  icon: ReactNode;
  label: string;
}

export default function NavButton({icon, label}: NavButtonProps) {
  return (
    <button className="flex items-center space-x-2 bg-[#ffffff1a] text-white px-3 py-1.5 rounded hover:bg-[#ffffff33] transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  );
}
