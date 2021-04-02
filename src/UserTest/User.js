import { useParams } from "react-router";

export default function User() {
    const {id} = useParams();
    console.log(id)

  return <div>tralalal: {id}</div>;
}
