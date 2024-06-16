import { Link } from "react-router-dom";
import AdvLink from "./AdvLink";
import { useState, useEffect } from "react";
import { getAdvs } from "../../models/Adv";
import Home from "../img/home.png"
import Bazar from "../img/bazar.png"

export default function AdvList() {
  const [advs, setAdvs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAdvs();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setAdvs(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Advs not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Advs are loading...</p>
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
        <div className="view_container__">
        <div className="section_title">
<div className="section_title_inside">
  Inzeráty
</div>
    </div>
    <div className="view_divide_advs__">
    
      {
        advs.map((adv, index) => (
          <AdvLink key={index} {...adv} />
        ))
      }
   
      </div>
      </div>
    
      </div>
    </>
  );
}
