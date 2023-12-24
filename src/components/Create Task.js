import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      alert("Поле не повино бути порожнім");
    }

    if (task.length < 5) {
      alert("Введіть не менше 5 символів");
      return;
    }

    if (task.length > 100) {
      alert("Введіть не більше 100 символів");
      return;
    }

    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="напишіть задачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit" className="btn">
        Додати
      </button>
    </form>
  );
}
