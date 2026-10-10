import { useState } from "react";

const useTodoAppFilter = (tasks) => {
  const [tab, setTab] = useState(null);
  const filteredTasks = tasks.filter((task) => {
    if (tab === false) return !task.completed;
    if (tab === true) return task.completed;
    return true;
  });

  return {tab, setTab, filteredTasks}
};

export {useTodoAppFilter}
