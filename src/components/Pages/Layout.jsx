import Header from "./Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="mt-10 flex flex-col gap-5 justify-center items-center space-y-5">
        <Outlet/>
      </div>

    </div>
  );
}

export { Layout };
