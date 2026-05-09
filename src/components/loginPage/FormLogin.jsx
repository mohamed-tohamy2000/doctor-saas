import FormLoginLeft from "./FormLoginLeft";
import FormLoginRight from "./FormLoginRight";

export default function FormLogin() {
  return (
    <>
      <div className="flex h-screen">
        <FormLoginLeft />
        <FormLoginRight />
      </div>
    </>
  );
}
