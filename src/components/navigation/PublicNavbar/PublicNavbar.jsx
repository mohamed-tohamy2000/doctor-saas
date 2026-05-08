import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { PublicNavbarLinks } from "./PublicNavbarLinks";

export default function PublicNavbar() {
  return (
    <header className="text-black flex items-center justify-between mx-6 py-4">
      <h1 className="font-bold text-[20px] text-[#00685F] ">Smart Booking</h1>
      <PublicNavbarLinks />
      <div className="flex gap-4 items-center justify-center">
        <Button className="text-[#00685F] hover:text-[#084e48] font-semibold px-4 py-2 hover:border-[#084e48]">Login</Button>
        <Button className="bg-[#00685F] hover:bg-[#084e48] text-white">Get Started</Button>
      </div>
    </header>
  );
}
