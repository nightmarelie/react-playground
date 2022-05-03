import React, { useState, ChangeEvent, useTransition } from "react";
import ListComponent, { largeList } from "./ListComponent";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(largeList);
  const [isPanding, startTransition] = useTransition();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    startTransition(() => {
      setList(largeList.filter((item) => item.name.includes(e.target.value)));
    });
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {isPanding ? (
        <div>Loading...</div>
      ) : (
        list.map((item) => <ListComponent key={item.id} item={item} />)
      )}
    </div>
  );
}

export default App;
