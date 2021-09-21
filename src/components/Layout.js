import NavigationDefault from "components/nav/Default";
import Footer from "components/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <main className="bg-color">
      <NavigationDefault />
      <div className="layout-container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
