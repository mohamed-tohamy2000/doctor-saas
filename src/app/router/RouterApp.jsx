import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ContactPage from "../../pages/ContactPage";
import Faq from "../../pages/Faq";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import LoginPage from "../../modules/auth/pages/LoginPage";
import Registerpage from "../../modules/auth/pages/Registerpage";
import ForgotPassword from "../../modules/auth/pages/ForgotPassword";
import ResetPassword from "../../modules/auth/pages/ResetPassword";
import DoctorDirectory from "../../modules/doctor/pages/DoctorDirectory";

export default function RouterApp() {
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/register" element={<Registerpage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
          <Route path="ForgotPassword" element={<ForgotPassword/>} />
          <Route path="ResetPassword" element={<ResetPassword/>} />
        <Route path="doctors" element={<DoctorDirectory />} />
      </Routes>
    </>
  );
}
