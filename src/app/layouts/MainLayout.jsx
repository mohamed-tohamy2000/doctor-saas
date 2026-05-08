import { Outlet } from "react-router-dom";
import PublicNavbar from "../../components/navigation/PublicNavbar/PublicNavbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-full">
        <PublicNavbar />

        {/* Content */}
        <div className="flex-1 overflow-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
