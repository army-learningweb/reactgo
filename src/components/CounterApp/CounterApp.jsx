import { useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { useEffect } from "react";

export default function CounterApp() {
  const [number, setNumber] = useState(0);

  const handleIncreaseNumber = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <BaseLayout title="COUNTER APP">
      <div className="mt-5 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg">
          <div className="text-5xl font-bold py-5 w-30 text-center bg-white rounded-lg shadow-sm">
            {number}
          </div>
          <button
            onClick={handleIncreaseNumber}
            className="bg-blue-600 py-1 px-4 rounded-md text-white hover:brightness-125 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            PLUS +
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}
