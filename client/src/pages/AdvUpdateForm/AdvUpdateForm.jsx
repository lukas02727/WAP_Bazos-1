import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateAdv, getAdv } from "../../models/Adv";
import Home from "../img/home.png"
import Bazar from "../img/bazar.png"
import Car from "../img/car_pink.png"

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
          <div id="container">
        <div className="title_header">
          <div className="left__">
          <Link to={"/"}>
      <img className="img_home" src={Home} alt="" />
      </Link>
          </div>
            <div className="middle__">
            <div className="middle_title">
              BAZOŠ
            </div>
            </div>
            <div className="right__">
            <img className="img_home" src={Bazar} alt="" />
            </div>
        </div>
        <div className="section_title">
<div className="section_title_inside">
  Úprava inzerátu
</div>
    </div>
    <div className="create_container">
      <form>
        <div className="description_create_">
          <div className="title_of_description">
            Titulek
          </div>
      <input className="input_create" type="text" name="name" required placeholder="Nadpis inzerátu" onChange={e => handleChange(e)}/>
      </div>
      <div className="view_img__">
            <img className="view_img_inside" src={Car} alt=""/>
        </div>
      <div className="description_create">
          <div className="title_of_description">
            Telefon
          </div>
          <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} className="input_create" type="number" name="phone" required placeholder="Zadejte telefonní číslo" onChange={e => handleChange(e)}/>
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Email
          </div>
          <input className="input_create" type="text" name="email" required placeholder="Zadejte email" onChange={e => handleChange(e)}/>
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Cena
          </div>
          <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} className="input_create" type="number" name="price" required placeholder="Zadejte cenu" onChange={e => handleChange(e)}/>
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Popisek
          </div>
          
          <input className="input_create_description" type="text" name="description" required placeholder="Popište produkt" onChange={e => handleChange(e)}/>
          
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Jméno
          </div>
          <input className="input_create" type="text" name="ownername" required placeholder="Zadejte jméno" onChange={e => handleChange(e)}/>
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Adresa
          </div>
          <input className="input_create" type="text" name="locality" required placeholder="Zadejte adresu" onChange={e => handleChange(e)}/>
      </div>

      <div className="description_create">
          <div className="title_of_description">
            Heslo
          </div>
          <input className="input_create" type="text" name="password" required placeholder="Zadejte heslo" onChange={e => handleChange(e)}/>
      </div>
      </form>
      <div className="update_adv">
      <button className="update_adv_inside" onClick={handlePost}>Upravit</button>
      </div>
      </div>
    </div>
    </>
  );
}
