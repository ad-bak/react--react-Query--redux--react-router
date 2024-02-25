import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading && (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-lg"></span>
        </div>
      )}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
