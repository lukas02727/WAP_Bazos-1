import { Link, useParams, useNavigate } from "react-router-dom";
import { getAdv, deleteAdv, updateAdv } from "../../models/Adv";
import { useState, useEffect } from "react";
import Home from "../img/home.png"
import Bazar from "../img/bazar.png"

 
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
    if (adv.password === formData) {
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
 
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (adv.password === formData) {
      const data = await updateAdv(id);
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
        <div className="adv_view_container">
        <div className="adv_title">
          <div className="adv_title_inside">
            {adv.name}
          </div>
        </div>
        <div className="view_img_">
          <img className="view_img_inside" src={adv.img} alt="Adv" />
        </div>
        <div className="description_of_adv">
          <div className="title_of_description_">
            <div className="title_of_description_inside">
              Popisek
            </div>
          </div>
          <div className="description_of_adv_inside">
            {adv.description}
          </div>
        </div>
        <div className="title_of_description_">
            <div className="title_of_description_inside">
              Informace
            </div>
          </div>
        <div className="informations_container">
          <div className="info_view">Cena</div>
          <div className="info_view_second">{adv.price} Kč</div>
          <div className="info_view">Telefon</div>
          <div className="info_view_second">+420 {adv.phone}</div>
          <div className="info_view">Adresa</div>
          <div className="info_view_second">{adv.locality}</div>
          <div className="info_view">Email</div>
          <div className="info_view_second">{adv.email}</div>
          <div className="info_view">Jméno</div>
          <div className="info_view_second">{adv.ownername}</div>
        </div>
        <div className="title_of_description_">
            <div className="title_of_description_inside">
              Smazání inzerátu
            </div>
          </div>
      <form>
        <div className="delete_adv">
        <input className="delete_adv_input" type="text" placeholder={adv.password} onChange={handleChange} />
        <button className="delete_button" onClick={handleDelete}>Smazat</button>
        </div>
      </form>
      
      <div className="update_adv">
      <Link to={`/updateadv/${id}`}>
     
        <div className="update_adv_inside">Úprava inzerátu</div>
       
      </Link>
      </div>
      </div>
      </div>
    </>
  );
}
 