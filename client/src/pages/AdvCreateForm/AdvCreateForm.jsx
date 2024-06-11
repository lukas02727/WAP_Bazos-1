import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createAdv } from "../../models/Adv";

export default function AdvCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const adv = await createAdv(formData);
    if (adv.status === 201) {
      redirectToSuccessPage(adv.payload._id);
    } else {
      setInfo(adv.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdadv/${id}`)
  }

  return (
    <>
      <h1>Advertisement create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Nadpis inzerátu" onChange={e => handleChange(e)}/>
        <input type="number" name="phone" required placeholder="Zadejte telefonní číslo" onChange={e => handleChange(e)}/>
        <input type="text" name="email" required placeholder="Zadejte email" onChange={e => handleChange(e)}/>
        <input type="number" name="price" required placeholder="Zadejte cenu" onChange={e => handleChange(e)}/>
        <input type="text" name="description" required placeholder="Popis inzerátu" onChange={e => handleChange(e)}/>
        <input type="text" name="ownername" required placeholder="Vaše jméno" onChange={e => handleChange(e)}/>
        <input type="text" name="locality" required placeholder="Popis" onChange={e => handleChange(e)}/>
        <input accept="image/*" type="file" name="img" required placeholder="Popis inzerátu" onChange={e => handleChange(e)}/>

        <button onClick={handlePost}>
        Vytvořit
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
