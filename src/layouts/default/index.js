import Menu from "components/menu";
import Footer from "components/footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
