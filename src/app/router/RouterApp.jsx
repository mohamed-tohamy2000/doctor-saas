import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ContactPage from "../../pages/ContactPage";
import Faq from "../../pages/Faq";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";

export default function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}
