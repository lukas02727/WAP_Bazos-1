import "./MainPage.css";
import { Link } from "react-router-dom";
import Home from "../img/home.png"
import Bazar from "../img/bazar.png"
import Car from "../img/icons/car.png"
import Bike from "../img/icons/bike.png"
import Pet from "../img/icons/pet.png"
import Computer from "../img/icons/computer.png"
import House from "../img/icons/house.png"
import Toy from "../img/icons/toy.png"
import Plus from "../img/icons/plus.png"
import View from "../img/icons/view.png"
import Github from "../img/icons/github.png"
import Bazos from "../img/icons/bazos.png"


export default function MainPage() {
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

        <div className="body_container">

        <div className="section_part_">
        
  <Link to={"/createcat"}>
    
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Plus} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          PŘIDAT
        </div>
      </div>
      
      </Link>
      
  </div>
  
  <div className="section_part__">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={View} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          INZERÁTY
        </div>
      </div>
      </Link>
  </div>
        </div>
        

    <div className="section_title">
<div className="section_title_inside">
  SEKCE
</div>
    </div>
<div className="section_container">
  
  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Car} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          AUTA
        </div>
      </div>
      </Link>
  </div>

  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Bike} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          KOLA
        </div>
      </div>
      </Link>
  </div>

  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Pet} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          ZVÍŘATA
        </div>
      </div>
      </Link>
  </div>
  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Computer} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          ELEKTRONIKA
        </div>
      </div>
      </Link>
  </div>
  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={House} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          NEMOVITOSTI
        </div>
      </div>
      </Link>
  </div>
  <div className="section_part">
  <Link to={"/cats"}>
    <div className="img_section_part">
      <img className="img_section_part_inside" src={Toy} alt="" />
    </div>
      <div className="section_part_title">
        <div className="section_part_title_inside">
          HRAČKY
        </div>
      </div>
      </Link>
  </div>
</div>
<div className="footer">
<div className="left__">
          <Link to={"https://github.com/FilipRiha/WAP_Bazos"}>
      <img className="img_home" src={Github} alt="" />
      </Link>
          </div>
            <div className="middle__">
            <div className="middle_title_">
             <Link className="under_cover" to={"https://github.com/FilipRiha"}>Filip Říha</Link>  <Link className="under_cover" to={"https://github.com/tomaskocci"}>Tomáš Kočí</Link>  <Link className="under_cover" to={"https://github.com/lukas02727"}>Lukáš Hodovník</Link>
            </div>
            </div>
            <div className="right__">
              <Link to={"https://www.bazos.cz/"}>
            <img className="img_bazos" src={Bazos} alt="" />
            </Link>
            </div>

</div>
      </div>
      
      
    </>
  );
}
