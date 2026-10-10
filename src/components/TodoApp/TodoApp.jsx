import { BaseLayout } from "../layouts/BaseLayout";
import { useTodoApp } from "../hooks/TodoApp";
import { useTodoAppFilter } from "../hooks/TodoAppFilter";

import TodoForm from "./TodoForm";
import TodoTab from "./TodoTab";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";
import TodoHint from "./TodoHint";

export default function TodoApp() {
  const {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
    handleDeleteCompletedTask,
    tasks,
    isLoading,
    error,
  } = useTodoApp();

  const {tab, setTab, filteredTasks} = useTodoAppFilter(tasks)  

  return (
    <BaseLayout title="TODO APP">  
        <div className="w-full">
          <main className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50">
            <TodoForm onAddTask={handleAddTask} />
            <TodoTab onSetTab={setTab} tab={tab} />
            <TodoList
              data={filteredTasks}
              isLoading={isLoading}
              error={error}
              onDeleteTask={handleDeleteTask}
              onUpdateTask={handleUpdateTask}
            />
            <TodoStats
              onDeleteCompletedTask={handleDeleteCompletedTask}
              tasks={tasks}
            />
          </main>
          <TodoHint />
        </div>
    </BaseLayout>
  );
}
