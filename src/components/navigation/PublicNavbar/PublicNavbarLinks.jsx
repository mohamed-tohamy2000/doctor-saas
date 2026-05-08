import { Link, useLocation } from "react-router-dom";

export const PublicNavbarLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Specialties", path: "/specialties" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];
  const location = useLocation();
  return (
    <>
      <nav className="flex gap-6 items-center justify-center">
        {links.map((el, index) => {
          const isActive = location.pathname === el.path;
          return (
            <Link
              key={el.path}
              to={el.path}
              className={`
                text-[14px] px-2 py-1 capitalize
                ${
                  isActive
                    ? "font-semibold  text-[#00685F] border-b-2 border-[#00685F]"
                    : "font-normal hover:text-[#084e48]"
                }
                `}
            >
              {el.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};
