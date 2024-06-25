import React, { useMemo, useState } from "react";
import { InitialItems } from "./utils";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(InitialItems);

  const selectedItems = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );

  return (
    <div className="Demo">
      <p>Muhammad Abu Huraira</p>
      <h1>useMemo Practice</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Selected Item: {selectedItems?.id}</p>
      </div>
    </div>
  );
};

export default Demo;
