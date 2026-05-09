import { Link } from "react-router-dom";
import Checkbox from "../ui/Input/Checkbox";
import InputSempil from "../ui/Input/InputSempil";
import Button from "../ui/Button/Button";

export default function FormLoginRight() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen  ">
      <div className="flex flex-col gap-8 w-fit">
        <div>
          <h1 className="font-semibold text-3xl">Welcome back</h1>
          <p>Please enter your credentials to access the system.</p>
        </div>
        <form>
          <div className="flex flex-col w-full gap-6">
            <InputSempil
              className="w-full"
              text="Email address"
              type="email"
              placeholder="exampil@gmail.com"
            />
            <InputSempil
              text="Password"
              type="password"
              placeholder="password"
            />
            <div className="flex justify-between">
              <Checkbox text="Remember me" />
              <Link className="text-[#00685F]" to={""}>
                Forgot password?
              </Link>
            </div>
            <Button className="w-full bg-[#00685F] text-white text-center">
              Supmint
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
