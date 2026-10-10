import { FileXCorner } from 'lucide-react'
import TodoItem from './TodoItem';

export default function TodoList({ data, isLoading, error, onDeleteTask, onUpdateTask }) {
  if (isLoading) {
    return (
      <div className="h-40 flex justify-center items-center gap-2 bg-gray-100 rounded-xl backdrop-blur-lg">
        <div className="w-5 h-5 border-blue-600 border-t-transparent animate-spin rounded-full border-3"></div>
        <div>Loading...</div>
      </div>
    );
  }

  if(error){
    return (
      <div className="h-40 flex justify-center items-center gap-2 bg-red-600/10 rounded-xl">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  if(data?.length <= 0){
    return (
      <div className="h-40 flex justify-center items-center gap-2 bg-gray-100 rounded-xl border border-dashed border-gray-300">
        <FileXCorner size={15} className='text-gray-500'/>
        <div className="text-gray-500 text-xs font-medium">Chưa có công việc !</div>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2 h-40 overflow-y-auto">
      {data.map((task) => (
        <TodoItem key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask}/>
      ))}
    </ul>
  );
}
