import { ApiTodo } from "../api/instanceTodo";
import { useState,useEffect } from "react";
import toast from "react-hot-toast";

const useTodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ===================
  // Danh sách công việc
  useEffect(() => {
    const fechTodo = async () => {
      const controller = new AbortController();
      try {
        setError(null);
        setIsLoading(true);
        const res = await ApiTodo.get("/todos", { signal: controller.signal });
        setTasks(res.data);
      } catch (error) {
        if (!controller.signal.aborted) setError(error.message);
      } finally {
        if (!controller.signal.aborted) {
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        }
      }
    };

    fechTodo();
  }, []);

  // ===================
  // Thêm công việc
  const handleAddTask = async (task) => {
    try {
      setIsLoading(true);
      const res = await toast.promise(
        ApiTodo.post("/todos", {
          title: task,
          completed: false,
        }),
        {
          loading: "Đang thêm...",
          success: "Thêm thành công",
          error: "Lỗi không thể thêm công việc",
        },
      );

      setTasks((prev) => [...prev, res.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  // ===================
  // Xoá công việc
  const handleDeleteTask = async (id) => {
    try {
      await toast.promise(ApiTodo.delete(`/todos/${id}`), {
        loading: "Đang xóa...",
        success: "Xóa thành công",
        error: "Lỗi không thể xóa công việc",
      });
      setTasks((prev) => prev.filter((task) => task.id != id));
    } catch (error) {
      setError(error.message);
    }
  };

  // ===================
  // Cập nhật công việc
  const handleUpdateTask = async (id) => {
    const task = tasks.find((task) => task.id == id);
    try {
      const res = await toast.promise(
        ApiTodo.put(`todos/${id}`, {
          ...task,
          completed: !task.completed,
        }),
        {
          loading: "Đang cập nhật...",
          success: "Cập nhật thành công",
          error: "Lỗi không thể cập nhật công việc",
        },
      );
      setTasks((prev) =>
        prev.map((task) =>
          task.id == id ? { ...task, completed: !task.completed } : task,
        ),
      );
    } catch (error) {
      setError(error.message);
    }
  };

  //============================
  // Xóa các công việc hoàn thành
  const handleDeleteCompletedTask = async () => {
    const completedTask = tasks.filter((task) => task.completed);
    if (!completedTask?.length > 0)
      return alert("Chưa có công việc hoàn thành");

    const idToast = toast.loading("Đang xóa...");
    for (const task of completedTask) {
      await ApiTodo.delete(`/todos/${task.id}`);
    }
    toast.success("Xóa thành công", { id: idToast });
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
    handleDeleteCompletedTask,
    tasks,
    isLoading,
    error
  };
};

export {useTodoApp}