"use client";

import { FormState, createTask } from "@/actions/tasks";
import { useFormState, useFormStatus } from "react-dom";

export default function NewTaskFrom() {
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(createTask, initialState);

  const SbmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-slate-800 text-white rounded-md px-2 py-1 mt-8 w-full hover:bg-gray-700 text-sm font-semibold
        disabled:bg-gray-500"
        disabled={pending}
      >
        Create
      </button>
    );
  };

  return (
    <div className="flex flex-col w-full items-center mx-auto max-w-sm">
      <form action={formAction}>
        <div className="mt-6">
          <label htmlFor="title" className="font-medium text-sm block">
            タスク名
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="block w-full px-2 mt-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md "
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="font-medium text-sm block">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="block w-full px-2 mt-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md "
          />
        </div>
        <div className="mt-6">
          <label htmlFor="duedate" className="font-medium text-sm block">
            日付
          </label>
          <input
            type="date"
            id="duedate"
            name="duedate"
            min="2020-01-01"
            max="2099-12-31"
            required
            className="block w-full  px-2 mt-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md "
          />
        </div>
        <SbmitButton />
      </form>
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
    </div>
  );
}
