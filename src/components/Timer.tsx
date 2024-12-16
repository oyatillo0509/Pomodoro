import { TimerTabs } from "./TimerTabs";

interface TimerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  time: string;
  handleStart: () => void;
  handlePause: () => void;
  handleResume: () => void;
  isRunning: boolean;
  isPaused: boolean;
}

export default function Timer({
  activeTab,
  setActiveTab,
  time,
  handleStart,
  handlePause,
  handleResume,
  isRunning,
  isPaused,
}: TimerProps) {
  const buttonColor =
    activeTab === "shortBreak" ? "text-[#5F9B8B]" : "text-[#BA4949]";

  return (
    <div className="bg-[#ffffff1a] rounded-md p-5">
      <TimerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-white leading-none mb-6">
          {time}
        </h1>
        {!isRunning ? (
          <button
            onClick={handleStart}
            className={`bg-white ${buttonColor} px-12 py-3 rounded-md text-xl font-bold hover:opacity-90 transition-opacity`}
          >
            START
          </button>
        ) : isPaused ? (
          <button
            onClick={handleResume}
            className={`bg-white ${buttonColor} px-12 py-3 rounded-md text-xl font-bold hover:opacity-90 transition-opacity`}
          >
            RESUME
          </button>
        ) : (
          <button
            onClick={handlePause}
            className={`bg-white ${buttonColor} px-12 py-3 rounded-md text-xl font-bold hover:opacity-90 transition-opacity`}
          >
            PAUSE
          </button>
        )}
      </div>
    </div>
  );
}
