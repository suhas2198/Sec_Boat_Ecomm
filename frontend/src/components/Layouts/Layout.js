import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  { Toaster } from 'react-hot-toast';
const Layout = ({children}) => {
  return (
    <div>
      <Header></Header>
      <main style={{minHeight:"70vh"}}>
        <Toaster/>
        {children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
