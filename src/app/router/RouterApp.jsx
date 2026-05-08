import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ContactPage from "../../pages/ContactPage";
import Home from "../../pages/Home";

export default function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
