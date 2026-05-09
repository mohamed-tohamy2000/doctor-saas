import img from "../../assets/loginPage/login.png";

export default function FormLoginLeft() {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
          alt="background"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#00201D99] to-transparent z-10"></div>
      </div>
    </>
  );
}
