import Link from "next/link";
import React from "react";
import { FaPen } from "react-icons/fa";
interface TaskEditButtonProps {
  id: string;
}

export default function TaskEditButton({
  id,
}: TaskEditButtonProps): JSX.Element {
  return (
    <button className="text-lg">
      <Link href={`/edit/${id}`}>
        <FaPen />
      </Link>
    </button>
  );
}
