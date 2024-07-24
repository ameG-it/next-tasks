import mongoose, { Document } from "mongoose";

interface Task {
  title: string;
  description: string;
  duedate: Date;
  isCompleted: boolean;
}

export interface TaskDocument extends Document, Task {
  _id: string;
  createAt: Date;
  updateAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duedate: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", taskSchema);
