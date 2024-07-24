import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonPeops {
  id: string;
}

export default function TaskDeleteButton({
  id,
}: TaskDeleteButtonPeops): JSX.Element {
  return (
    <form action="" className="flex items-center">
      <button
        type="submit"
        className="text-lg text-red-700 hover:text-gray-700"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
}
