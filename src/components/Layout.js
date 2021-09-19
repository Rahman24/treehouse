import NavigationDefault from "components/nav/Default";
import Footer from "components/Footer";

import "./Layout.css";

const Layout = ({ children, displayNav = true }) => {
  return (
    <main className="bg-color">
      {displayNav && <NavigationDefault />}
      <div className="layout-container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
