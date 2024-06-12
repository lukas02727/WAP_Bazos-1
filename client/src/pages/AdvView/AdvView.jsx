import { Link, useParams, useNavigate } from "react-router-dom";
import { getAdv, deleteAdv } from "../../models/Adv";
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
      <form>
        <input type="text" placeholder="Heslo" onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateadv/${id}`}>
        <p>Úprava inzerátu</p>
      </Link>
      
      </div>
      </div>
    </>
  );
}
