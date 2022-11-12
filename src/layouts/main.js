import { Outlet } from "react-router";
import { Footer } from "./main/footer";
import { Header } from "./main/header";
import { Navbar } from "./main/navbar";

export const MailLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
