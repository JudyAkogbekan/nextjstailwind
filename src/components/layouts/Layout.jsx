import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

function Layout({ children, meta }) {
  return (
    <>
      <Meta {...meta} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
