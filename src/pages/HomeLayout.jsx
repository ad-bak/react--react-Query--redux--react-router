import { Outlet } from "react-router-dom";

const HomeLayout = () => (
  <>
    <nav>
      <span className="text-4xl text-primary">Comfy</span>
    </nav>
    <Outlet />
  </>
);

export default HomeLayout;
