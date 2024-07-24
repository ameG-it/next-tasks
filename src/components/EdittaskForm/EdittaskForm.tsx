import { TaskDocument } from "@/models/task";
import React from "react";

interface EdittaskFormParams {
  param: TaskDocument;
}

function EdittaskForm({ param }: EdittaskFormParams) {
  return (
    <div className="flex flex-col w-full items-center mx-auto max-w-sm">
      <form action="">
        <div className="mt-6">
          <label htmlFor="title" className="font-medium text-sm block">
            タスク名
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={param.title}
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
            value={param.description}
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
            value={new Date(param.duedate).toDateString()}
            required
            className="block w-full  px-2 mt-2 py-1 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md "
          />
        </div>
        <div className="mt-6 flex gap-1">
          <input
            type="checkbox"
            id="isComplete"
            name="isComplete"
            checked={param.isCompleted}
          />
          <label htmlFor="isComplete" className="font-medium text-sm">
            タスクを完了にする
          </label>
        </div>

        <button
          type="submit"
          className="bg-slate-800 text-white rounded-md px-2 py-1 mt-8 w-full hover:bg-gray-700 text-sm font-semibold"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default EdittaskForm;
