"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, FormData: FormData) => {
  const newTask = {
    title: FormData.get("title"),
    description: FormData.get("description"),
    duedate: FormData.get("duedate"),
    isCompleted: false,
  };

  try {
    await connectDB();
    await TaskModel.create(newTask);
  } catch (error) {
    console.log(error);
    state.error = "タスクの作成に失敗";
    return state;
  }
  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  FormData: FormData
) => {
  const updateTask: Task = {
    title: FormData.get("title") as string,
    description: FormData.get("description") as string,
    duedate: FormData.get("duedate") as string,
    isCompleted: Boolean(FormData.get("isCompleted")),
  };
  try {
    await connectDB();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    console.log(error);
    state.error = "タスクの更新に失敗";
    return state;
  }
  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  console.log(id);
  try {
    await connectDB();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    state.error = "タスクの削除に失敗";
    return state;
  }
  redirect("/");
};
