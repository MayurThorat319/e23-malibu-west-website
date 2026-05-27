import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SmoothScroll>
      <Header />

      <main>{children}</main>

      <Footer />
    </SmoothScroll>
  );
};

export default Layout;