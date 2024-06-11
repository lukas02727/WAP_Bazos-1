import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateAdv, getAdv } from "../../models/Adv";

export default function AdvUpdateForm() {
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
  };

  const postForm = async () => {
    const adv = await updateAdv(id, formData);
    if (adv.status === 200) {
      navigate(`/adv/${id}`);
    } else {
      setInfo(adv.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Adv not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Adv is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Adv update form</h1>
      <p>{id}</p>
      <form>
      <input type="text" name="name" required placeholder="Nadpis inzerátu" onChange={e => handleChange(e)}/>
        <input type="number" name="phone" required placeholder="Zadejte telefonní číslo" onChange={e => handleChange(e)}/>
        <input type="text" name="email" required placeholder="Zadejte email" onChange={e => handleChange(e)}/>
        <input type="number" name="price" required placeholder="Zadejte cenu" onChange={e => handleChange(e)}/>
        <input type="text" name="description" required placeholder="Popis inzerátu" onChange={e => handleChange(e)}/>
        <input type="text" name="ownername" required placeholder="Vaše jméno" onChange={e => handleChange(e)}/>
        <input type="text" name="locality" required placeholder="Popis" onChange={e => handleChange(e)}/>
        <input accept="image/*" type="file" name="img" required placeholder="Popis inzerátu" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>Upravit</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
