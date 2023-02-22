import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {loading && <div>Loading...</div>}
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}
