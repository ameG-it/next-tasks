import Link from "next/link";
import { MdAddTask } from "react-icons/md";
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

export default async function Page() {
  const getCompleteTasks = async (): Promise<TaskDocument[]> => {
    const response = await fetch(`${process.env.API_URL}tasks/completed`);
    const data = await response.json();
    return data.tasks as TaskDocument[];
  };

  const tasks = await getCompleteTasks();

  return (
    <div className="pb-24 p-8 h-full overflow-y-auto text-gray-800">
      <header className="flex justify-between items-center">
        <h1>Completed Tasks</h1>
        <Link
          href="/new"
          className="bg-gray-800 text-slate-50 rounded-full flex items-center gap-1 p-2"
        >
          <MdAddTask />
          <div>add Task</div>
        </Link>
      </header>
      <main>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </main>
    </div>
  );
}
