import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import { getInitialTime, getBackgroundColor } from "./utils/timerUtils";

function App() {
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [time, setTime] = useState(getInitialTime(activeTab));
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalTime = getInitialTime(activeTab)
    .split(":")
    .reduce((acc, curr) => acc * 60 + parseInt(curr), 0); 

  const remainingTime = time
    .split(":")
    .reduce((acc, curr) => acc * 60 + parseInt(curr), 0);

  const progress = Math.round(((totalTime - remainingTime) / totalTime) * 100);

  useEffect(() => {
    setTime(getInitialTime(activeTab));
  }, [activeTab]);

  useEffect(() => {
    if (isRunning && time !== "00:00" && !isPaused) {
      const timeoutId = setTimeout(() => {
        const [minutes, seconds] = time.split(":").map(Number);

        if (seconds > 0) {
          setTime(`${minutes}:${(seconds - 1).toString().padStart(2, "0")}`);
        } else if (minutes > 0) {
          setTime(`${(minutes - 1).toString().padStart(2, "0")}:59`);
        } else {
          clearTimeout(timeoutId); 

          setActiveTab((prevTab) =>
            prevTab === "pomodoro"
              ? "shortBreak"
              : prevTab === "shortBreak"
              ? "longBreak"
              : "pomodoro"
          );

          setIsRunning(false); 

          const audio = new Audio("/ringtone.mp3");
          audio
            .play()
            .catch((error) => console.error("Audio not playing: ", error));
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [time, isRunning, activeTab, isPaused]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${getBackgroundColor(
        activeTab
      )}`}
    >
      <Header progress={progress} /> 
      <main className="container mx-auto px-4 pt-8 max-w-2xl">
        <Timer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          time={time}
          handleStart={handleStart}
          handlePause={handlePause}
          handleResume={handleResume}
          isRunning={isRunning}
          isPaused={isPaused}
        />
        <Tasks />
      </main>
    </div>
  );
}

export default App;
