import { TaskModel } from "@/models/task";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const task = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json(
        { massage: "タスクが存在しません" },
        { status: 404 }
      );
    }
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { massage: "エラーが発生しました。" },
      { status: 500 }
    );
  }
};
