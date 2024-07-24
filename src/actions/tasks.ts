"use server";

import { TaskModel } from "@/models/task";
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
