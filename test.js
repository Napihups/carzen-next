import "./styles.css";
import { Countries } from "./Countries";
import { useEffect, useState } from "react";
import { formHelperTextClasses } from "@mui/material";

/*
Build a simple autocomple Functionality.
Time limit 15-20min

Use function Countries() to fetch list of countries




*/

export default function App() {
  const [open, setOpen] = useState(false);

  const [inpuVal, setValue] = useState("");

  const results = useAutoComplete(inpuVal);

  const result = Array(10)
    .fill(0)
    .map((_, index) => `Item ${index}`);

  return (
    <div className="App">
      <div className="wrapper">
        <input onChange={(e) => setValue(e.target.value)} className="Autocomplete" placeholder="Search Countries..." />
        <div className={`dropdown__card ${open ? "open" : ""}`}>
          <ul className="list">
            {results.map((item, index) => {
              return (
                <li key={index} className="item">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const useAutoComplete = (value) => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    const re = Countries().filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    setResult(re);
  }, [value]);

  return results;
};
