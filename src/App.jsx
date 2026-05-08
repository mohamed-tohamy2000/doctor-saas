import { BrowserRouter } from "react-router-dom";
import RouterApp from "./app/router/RouterApp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </>
  );
}


