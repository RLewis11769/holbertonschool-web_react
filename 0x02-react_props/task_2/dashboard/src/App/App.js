import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <>
      <Notifications />
      <Header />
      <main className='App-body'>
        <Login />
      </main>
      <Footer />
    </>
  );
}
