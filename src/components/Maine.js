import React, { useState, useEffect } from "react";
import CreateTask from "./Create Task";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";

export default function Maine() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const addTask = (task) => {
    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };
    setList((list) => [...list, newTask]);
  };

  const deleteTask = (id) => {
    console.log("Видаленя", id);
    const newList = list.filter((task) => id !== task.id);
    setList([...newList]);
  };

  const completeTask = (id) => {
    const newList = list.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList([...newList]);
  };
  const deleteAllTask = () => {
    setList([]);
  };
  return (
    <div className="main">
      <h3 className="title">Список завдань</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
        deleteAllTask={deleteAllTask}
      />
    </div>
  );
}
