export default function TodoStats({onDeleteCompletedTask, tasks}) {
  const completed = tasks.filter(task => task.completed).length
  const active = tasks.filter(task => !task.completed).length
  return (
    <footer className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
      <p className="text-xs text-slate-500">
        <span className="text-sm font-bold text-slate-900">{active}</span> active,{" "}
        <span className="text-sm font-bold text-slate-900">{completed}</span> completed
      </p>
      <button onClick={onDeleteCompletedTask} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-500">
        Clear completed
      </button>
    </footer>
  );
}
