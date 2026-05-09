
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RouterApp from "./app/router/RouterApp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterApp />
      </BrowserRouter>
    </>
  );
}


