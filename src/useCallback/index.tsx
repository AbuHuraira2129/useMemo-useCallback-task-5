import React, { useCallback, useState } from "react";

import Search from "./Search";
import { shuffle } from "./utils";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface DemoProps {}

export default function Demo2({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="tutorial">
      <h1>Use Callback Practice</h1>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSearch} />
      </div>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
