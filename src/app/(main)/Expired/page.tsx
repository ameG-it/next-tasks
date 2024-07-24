import Link from "next/link";
import { MdAddTask } from "react-icons/md";
import TaskCard from "@/components/TaskCard/TaskCard";
export default function Page() {
  return (
    <div className="pb-24 p-8 h-full overflow-y-auto text-gray-800">
      <header className="flex justify-between items-center">
        <h1>Expired Tasks</h1>
        <Link
          href="/new"
          className="bg-gray-800 text-slate-50 rounded-full flex items-center gap-1 p-2"
        >
          <MdAddTask />
          <div>add Task</div>
        </Link>
      </header>
      <main>
        <TaskCard />
      </main>
    </div>
  );
}
