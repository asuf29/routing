import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams;
  return (
    <div>
      <h1>User Details</h1>
      id: {id}
    </div>
  );
}
