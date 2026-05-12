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
import ErrorPage from "@/modules/errors/pages/ErrorPage";
import Dashboard from "@/modules/doctor/pages/Dashboard";
import DoctorAppointments from "../../modules/doctor/pages/DoctorAppointments";
import DoctorLayout from "../layouts/DoctorLayout";


export default function RouterApp() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Public */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<AboutUs />} />
      </Route>

      {/* Doctor */}
      <Route path="dashboard" element={<DoctorLayout />}>
      <Route index element={<Dashboard/>}/>
        <Route path="directory" element={<DoctorDirectory />} />
      
      <Route path="appointments" element={<DoctorAppointments />} />
      </Route>

      {/* Error */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}