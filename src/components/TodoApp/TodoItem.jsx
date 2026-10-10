export default function TodoItem({task,onUpdateTask, onDeleteTask}) {
  return (
    <li
      className="group flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.25 transition hover:border-blue-200"
    >
      {task.completed ? (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
      ) : (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 transition group-hover:border-blue-500"></div>
      )}

      <span
        onClick={(e) => onUpdateTask(task.id)}
        className={`flex-1 text-sm ${task.completed ? "line-through text-gray-400" : "text-slate-700"}`}
      >
        {task.title}
      </span>
      <button
        onClick={(e) => onDeleteTask(task.id)}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 opacity-0 transition group-hover:opacity-100 hover:bg-red-50 hover:text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
        </svg>
      </button>
    </li>
  );
}
