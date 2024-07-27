import EdittaskForm from "@/components/EdittaskForm/EdittaskForm";
import { TaskDocument } from "@/models/task";

interface Params {
  params: { id: string };
}
const getTask = async ({ params }: Params): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${params.id}`, {
    cache: "no-store",
  });

  const data = await response.json();

  return data as TaskDocument;
};

export default async function page({ params }: Params) {
  const task = await getTask({ params });
  console.log(task);
  return (
    <div>
      <h2 className="text-center mt-8 font-bold text-2xl">Edit Task</h2>
      <EdittaskForm key={task._id} param={task} />
    </div>
  );
}
