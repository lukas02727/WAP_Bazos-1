import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createAdv } from "../../models/Adv";
import Home from "../img/home.png"
import Bazar from "../img/bazar.png"
import Icon from "../img/icons/image_icon.png"
 
export default function AdvCreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    price: "",
    description: "",
    ownername: "",
    locality: "",
    password: "",
    img: null,
  });
 
  const [info, setInfo] = useState("");
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
 
   
  const handleImageChange = (e) => {
 
    const file = e.target.files[0];
 
    const reader = new FileReader();
 
    reader.readAsDataURL(file);
 
    reader.onload = () => {
 
      setFormData({ ...formData, img: reader.result });
 
    };
 
    reader.onerror = (error) => {
 
      console.log("Error: ", error);
 
    };
 
  };
 
 
 
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
  NOVÝ INZERÁT
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
      <div className="description_create">
          <div className="title_of_description">
            Obrázek
          </div>
          <div className="image_width_cont">
          <input id="drop_zone" className="img_width"
                accept="image/*"
                type="file"
                name="img"
                required
                onChange={handleImageChange}
                
              />
              <img className="icon_image_show" src={Icon} alt="" />
              </div>
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
         
          <textarea className="input_create_description" type="text" name="description" required placeholder="Popište produkt" onChange={e => handleChange(e)}/>
         
      </div>
      <div className="description_create">
          <div className="title_of_description">
            Jméno
          </div>
          <input className="input_create" type="text" name="ownername" required placeholder="Zadejte jméno" onChange={e => handleChange(e)}/>
      </div>
      <div className="description_create">
          <div className="title_of_description">
            Email
          </div>
          <input className="input_create" type="text" name="email" required placeholder="Zadejte email" onChange={e => handleChange(e)}/>
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
 
      
         
       
      <div className="create_adv_button">
      <button className="create_adv_button_inside" onClick={handlePost}>
          Vytvořit
        </button>
       
        </div>
       
      </form>
      </div>
      </div>
    </>
  );
}
