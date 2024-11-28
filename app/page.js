"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);
  // handle form fuction
  const handleSubmit = (event) => {
    event.preventDefault();
    setMain([...main, { task, desc }]);
    setTask("");
    setDesc("");
    console.log(main);
  };
  // delete task on the screen
  const deleteHandler = (i) => {
    let copyTask = [...main];
    copyTask.splice(i, 1);
    setMain(copyTask);
  };

  // show tasks or not on screen

  let renderTask = (
    <h2 className="text-center font-bold  text-black">
      No Task available at a time
    </h2>
  );

  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-around mb-4 capitalize"
        >
          <div className="flex items-center justify-around w-2/3">
            <p className="font-semibold text-xl">{t.task}</p>
            <p className="font-semibold text-xl">{t.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-8 py-2 rounded-full font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-center p-6 shadow-2xl font-serif text-4xl w-full font-extrabold	">
        My Todo List App
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-6 p-6"
      >
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          className="border-4 border-slate-900 px-6 py-3 bg-stone-200 font-serif rounded-full w-full max-w-xs"
          placeholder="Enter title here"
        />
        <input
          value={desc}
          type="text"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="border-4 border-slate-900 px-6 py-3 bg-stone-200 font-serif rounded-full w-full max-w-xs"
          placeholder="Enter description here"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-full w-full font-bold max-w-xs hover:bg-gray-800 transition duration-300"
        >
          Add Task
        </button>
      </form>
      <hr class="border-t border-gray-300 w-full my-8" />

      <div className="bg-stone-200 w-full p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
