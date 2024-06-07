import { Link, useParams } from "react-router-dom";
import Home from "../img/home.png"

export default function CreatedCat() {
  const { id } = useParams();  

  return (
    <>
      <p>Created cat: { id }</p>
      <Link to={`/cat/${id}`}>
        <p>View cat</p>
      </Link>
     
      <Link to={"/"}>
      <img src={Home} alt="" />
      </Link>
      
    </>
  );
}
