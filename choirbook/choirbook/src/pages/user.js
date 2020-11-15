import React from "react";
import "../css/font-awesome.min.css";
import "../css/bootstrap.css";
import "../css/style.css";
// import "../css/editor.css";
import "../css/animate.css";
import Menu from "./includes/content/Menu";
import Footer from "./includes/footer/Footer";
import ContentUser from "./includes/content/ContentUser";


export default function userPage() {
  return (
    <>
      <Menu/>
      <ContentUser/>
      <Footer/>
    </>)
}