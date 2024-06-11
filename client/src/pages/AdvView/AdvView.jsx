import { Link, useParams, useNavigate } from "react-router-dom";
import { getAdv, deleteAdv } from "../../models/Adv";
import { useState, useEffect } from "react";

export default function AdvView() {
  const { id } = useParams();
  const [adv, setAdv] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getAdv(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setAdv(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (adv.name === formData) {
      const data = await deleteAdv(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Adv not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Adv is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Prohlednuti inzeratu</h1>
      <p>{id}</p>
      <p>{adv.name}</p>
      <p>{adv.phone}</p>
      <p>{adv.email}</p>
      <p>{adv.price}</p>
      <p>{adv.description}</p>
      <p>{adv.ownername}</p>
      <p>{adv.locality}</p>
      <p>{adv.image}</p>
      <form>
        <input type="text" placeholder={adv.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateadv/${id}`}>
        <p>Úprava inzerátu</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
