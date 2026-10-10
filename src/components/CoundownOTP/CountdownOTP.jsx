import { useEffect, useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";

export default function CountdownOTP() {
  const [time, setTime] = useState(5);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (time <= 0) {
      setNotification("Time is out !");
      return;
    }

    const timer = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (time) => {
    const minues = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${minues} : ${seconds}`;
  };

  return (
    <BaseLayout title="COUNTDOWN OTP">
      <div className="flex flex-col justify-center items-center mt-5">
        <div>
          <img src="/public/images/qr.jpg" alt="" className="w-70 h-70 object-cover"/>
        </div>

        <div className="mt-5 font-bold text-4xl tracking-tight bg-white p-4 rounded-xl shadow-sm">
          {formatTime(time)}
        </div>

        {notification && (
          <div className="mt-4 text-amber-500 py-3 px-4 bg-amber-500/10 rounded-lg border-amber-500 border">
            {notification}
          </div>
        )}
        
      </div>
    </BaseLayout>
  );
}
