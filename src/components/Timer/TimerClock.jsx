import { useRef, useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";

export default function TimerClock() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const formatTime = (time) => {
    const minues = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${minues} : ${seconds}`;
  };

  const handleStartTimer = () => {
    if(timeRef.current) clearInterval(timeRef.current)
    timeRef.current = setInterval(() => {
        setTime(time => time + 1)
    });
  };

  const handleStopTimer = () => {
    clearInterval(timeRef.current)
  }

  const handleResetTimer = () => {
    handleStopTimer();
    setTime(0);
  }

  return (
    <BaseLayout title="TIMER CLOCK">
      <div className="mt-5 flex flex-col gap-2 justify-center items-center">
        <div className="text-4xl font-bold tracking-tight p-4 bg-white rounded-md shadow-sm">
          {formatTime(time)}
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={handleStartTimer} className="bg-blue-600 p-2 rounded-md text-white text-xs font-semibold">
            Start Count
          </button>
          <button onClick={handleStopTimer} className="bg-red-600 p-2 rounded-md text-white text-xs font-semibold">
            Stop Count
          </button>
          <button onClick={handleResetTimer} className="bg-gray-600 p-2 rounded-md text-white text-xs font-semibold">
            Reset
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}
