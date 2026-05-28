import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

interface LayoutProps {
  children: React.ReactNode;
   onOpenDialog: () => void;
}

const Layout = ({ children, onOpenDialog, }: LayoutProps) => {
  return (
    <SmoothScroll>
       <Header onOpenDialog={onOpenDialog} />

      <main>{children}</main>

      <Footer />
    </SmoothScroll>
  );
};

export default Layout;