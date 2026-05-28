import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-3xl font-bold">Counter</h1>
          <span className="text-3xl font-bold">{count}</span>
          <button
            onClick={handleIncreaseCount}
            className="py-1 px-3 bg-green-600 text-white rounded-sm"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
