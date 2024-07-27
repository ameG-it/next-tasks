"use client";

import { deleteTask } from "@/actions/tasks";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonPeops {
  id: string;
}

const initialState = {
  error: "",
};

export default function TaskDeleteButton({
  id,
}: TaskDeleteButtonPeops): JSX.Element {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);
  useEffect(() => {
    if (state && state.error != "") {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="text-lg text-red-700 hover:text-gray-700
        disabled:text-gray-500"
        disabled={pending}
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction} className="flex items-center">
      <SubmitButton />
    </form>
  );
}
