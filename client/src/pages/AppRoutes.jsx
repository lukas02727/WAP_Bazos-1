import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CreatedCat from "./CatCreateForm/CreatedCat";


import AdvCreateForm from "./AdvCreateForm/AdvCreateForm";
import AdvUpdateForm from "./AdvUpdateForm/AdvUpdateForm";
import AdvView from "./AdvView/AdvView";
import AdvList from "./AdvList/AdvList";
import CreatedAdv from "./AdvCreateForm/CreatedAdv";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createcat" element={<CatCreateForm />} />
          <Route path="/updatecat/:id" element={<CatUpdateForm />} />
          <Route path="/cat/:id" element={<CatView />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/createdcat/:id" element={<CreatedCat />} />


          <Route path="/createadv" element={<AdvCreateForm />} />
          <Route path="/updateadv/:id" element={<AdvUpdateForm />} />
          <Route path="/adv/:id" element={<AdvView />} />
          <Route path="/advs" element={<AdvList />} />
          <Route path="/createdadv/:id" element={<CreatedAdv/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
