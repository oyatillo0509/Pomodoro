import {useState, useEffect} from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import {getInitialTime, getBackgroundColor} from "./utils/timerUtils";

function App() {
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [time, setTime] = useState(getInitialTime(activeTab));
  const [isRunning, setIsRunning] = useState(false); // Start yoki Pause holati
  const [isPaused, setIsPaused] = useState(false); // Pause holatini tekshirish

  // Time o'zgarganda vaqtni yangilash
  useEffect(() => {
    setTime(getInitialTime(activeTab));
  }, [activeTab]);

  // Timerni boshqarish uchun useEffect
  useEffect(() => {
    if (isRunning && time !== "00:00" && !isPaused) {
      const timeoutId = setTimeout(() => {
        const [minutes, seconds] = time.split(":").map(Number);

        if (seconds > 0) {
          setTime(`${minutes}:${(seconds - 1).toString().padStart(2, "0")}`);
        } else if (minutes > 0) {
          setTime(`${(minutes - 1).toString().padStart(2, "0")}:${59}`);
        } else {
          // Timer tugadi
          clearTimeout(timeoutId);
          // Tabni o'zgartirish (pomodoro -> shortBreak -> longBreak)
          if (activeTab === "pomodoro") {
            setActiveTab("shortBreak"); // Pomodoro tugadi, Short Break tabiga o'tish
          } else if (activeTab === "shortBreak") {
            setActiveTab("longBreak"); // Short Break tugadi, Long Break tabiga o'tish
          } else {
            setActiveTab("pomodoro"); // Long Break tugadi, Pomodoro tabiga qaytish
          }

          setIsRunning(false); // Vaqt tugadi, timer to'xtaydi
          // Jiringlash efekti
          const audio = new Audio("/ringtone.mp3");
          audio.play().catch((error) => {
            console.error("Audio not playing: ", error);
          });
        }
      }, 1000); // 1 soniya kutish

      return () => clearTimeout(timeoutId); // Timerni to'xtatish
    }
  }, [time, isRunning, activeTab, isPaused]); // time, isRunning, activeTab va isPaused o'zgarganda qayta ishlaydi

  // Start tugmasi bosilganda timerni boshlash
  const handleStart = () => {
    setIsRunning(true); // Timerni boshlash
    setIsPaused(false); // Pause bo'lsa, davom ettirish
  };

  // Pause tugmasi bosilganda timerni to'xtatish
  const handlePause = () => {
    setIsPaused(true); // Timerni to'xtatish
  };

  // Resume tugmasi bosilganda timerni davom ettirish
  const handleResume = () => {
    setIsPaused(false); // Timerni davom ettirish
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${getBackgroundColor(
        activeTab
      )}`}
    >
      <Header />
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
