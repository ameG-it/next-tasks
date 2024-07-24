import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectDB();
    const Tasks: TaskDocument[] = await TaskModel.find();
    return NextResponse.json({ tasks: Tasks }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { massage: `'Internal Server Error' ${error}` },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
