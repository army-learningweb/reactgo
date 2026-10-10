import { useEffect, useState } from "react";
import { useRef } from "react";

export default function TodoForm({ onAddTask }) {
  const [task, setTask] = useState("");
  const ipRef = useRef(null);
  
  useEffect(() => {
    ipRef.current.focus()
  },[])

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() == "") return alert("Vui lòng nhập công việc");
    onAddTask(task);
    setTask("");
  };

  return (
    <form className="flex items-center gap-3" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setTask(e.target.value)}
        value={task}
        ref={ipRef}
        className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
      <button
        type="submit"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 text-white shadow-md transition hover:bg-blue-700 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </form>
  );
}
