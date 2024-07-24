import React from "react";
import TaskEditButton from "./TaskEditButton/TaskEditButton";
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import { TaskDocument } from "@/models/task";

interface TaskCardProps {
  task: TaskDocument;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="w-56 h-48 shadow-md p-4 rounded-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
      </header>
      <section className="">
        <p className="text-sm">{task.description}</p>
      </section>
      <footer className="space-y-2 text-sm">
        <div className="text-sm">{new Date(task.duedate).toISOString()}</div>
        <div className="flex justify-between">
          <button
            className={`rounded-full  py-2 px-4 text-white shadow-md ${
              task.isCompleted ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {task.isCompleted ? "completed" : "completed"}
          </button>
          <div className="flex gap-4">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </footer>
    </article>
  );
}
