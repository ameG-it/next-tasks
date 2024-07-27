"use client";
import { updateTask } from "@/actions/tasks";
import { TaskDocument } from "@/models/task";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface EdittaskFormParams {
  param: TaskDocument;
}

function EdittaskForm({ param }: EdittaskFormParams) {
  const [title, setTitle] = useState(param.title);
  const [description, setDescription] = useState(param.description);
  const [duedate, setDuedate] = useState(param.duedate);
  const [isCompleted, setIsCompleted] = useState(param.isCompleted);

  const initialState = {
    error: "",
  };
  const updateTaskWithId = updateTask.bind(null, param._id);
  const [state, formAction] = useFormState(updateTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="bg-slate-800 text-white rounded-md px-2 py-1 mt-8 w-full hover:bg-gray-700 text-sm font-semibold
        disabled:bg-gray-500"
        disabled={pending}
      >
        Edit
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            value={duedate}
            onChange={(e) => {
              setDuedate(e.target.value);
            }}
            required
            className="block w-full  px-2 mt-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md "
          />
        </div>
        <div className="mt-6 flex gap-1">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            onChange={(e) => {
              setIsCompleted(e.target.checked);
            }}
            checked={isCompleted}
          />
          <label htmlFor="isCompleted" className="font-medium text-sm">
            タスクを完了にする
          </label>
        </div>
        <SubmitButton />
      </form>
      {state.error && <p className="text-sm text-red-500">エラー</p>}
    </div>
  );
}

export default EdittaskForm;
