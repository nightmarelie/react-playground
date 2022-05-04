import React, { useState, ChangeEvent, useTransition } from "react";
import ListComponent, { largeList } from "./components/ListComponent";
import Modal from "./components/Modal";
import useLocalSotrage from "./hooks/useLocalStorage";

function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useLocalSotrage("name", "");
  const [list, setList] = useState(largeList);
  const [isPanding, startTransition] = useTransition();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    startTransition(() => {
      setList(largeList.filter((item) => item.name.includes(e.target.value)));
    });
  }

  return (
    <div className="component">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Fancy Modal
      </Modal>
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
