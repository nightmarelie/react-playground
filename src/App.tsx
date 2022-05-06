import React, { useState, ChangeEvent, useTransition } from "react";
import ListComponent, { largeList } from "./components/ListComponent";
import Modal from "./components/Modal";
import useLocalSotrage from "./hooks/useLocalStorage";
import useDebounceEffect from "./hooks/useDebounceEffect";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useLocalSotrage("name", "");
  const [list, setList] = useState(largeList);
  const [isPanding, startTransition] = useTransition();
  const [theme, setTheme] = useState("dark");

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useDebounceEffect(
    () => {
      fetch(`https://example.com?q=${query}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    },
    [query],
    500
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    startTransition(() => {
      setList(largeList.filter((item) => item.name.includes(e.target.value)));
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="component" onClick={() => console.log(111121212)}>
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
    </ThemeContext.Provider>
  );
}

export default App;
