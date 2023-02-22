import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}
