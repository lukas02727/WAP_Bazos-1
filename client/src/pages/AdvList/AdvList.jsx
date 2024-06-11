import { Link } from "react-router-dom";
import AdvLink from "./AdvLink";
import { useState, useEffect } from "react";
import { getAdvs } from "../../models/Adv";

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
      <h1>Adv list</h1>
      {
        advs.map((adv, index) => (
          <AdvLink key={index} {...adv} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
