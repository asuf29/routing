import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/user/1">User 1</Link>
        </li>
        <li>
          <Link to="/user/2">User 2</Link>
        </li>
        <li>
          <Link to="/user/3">User 3</Link>
        </li>
      </ul>
    </div>
  );
}
