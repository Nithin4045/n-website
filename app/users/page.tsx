"use client";

import React, { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((u: any, index: number) => (
          <li key={index}>
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
