import { Link, useParams } from "react-router-dom";
import Home from "../img/home.png"

export default function CreatedAdv() {
  const { id } = useParams();  

  return (
    <>
      <p>Created cat: { id }</p>
      <Link to={`/adv/${id}`}>
        <p>podívat se na inzeráty</p>
      </Link>
     
      <Link to={"/"}>
      <img src={Home} alt="" />
      </Link>
      
    </>
  );
}
