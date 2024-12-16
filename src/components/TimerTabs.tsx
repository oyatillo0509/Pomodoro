interface TimerTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TimerTabs({activeTab, setActiveTab}: TimerTabsProps) {
  return (
    <div className="flex justify-center space-x-4 mb-5">
      {["pomodoro", "shortBreak", "longBreak"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md font-bold ${
            activeTab === tab
              ? "bg-[#ffffff33] text-white"
              : "text-[#ffffff99] hover:bg-[#ffffff1a]"
          }`}
        >
          {tab === "pomodoro"
            ? "Pomodoro"
            : tab === "shortBreak"
            ? "Short Break"
            : "Long Break"}
        </button>
      ))}
    </div>
  );
}
