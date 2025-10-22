import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import UpdateNews from "../Components/UpdateNews";
import Navbar from "../Components/Navbar";
import LeftBar from './../Components/HomePageLayout/LeftBar';
import RightSidebar from './../Components/HomePageLayout/RightSidebar';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section>
          <UpdateNews />
        </section>
        <section>
          <Navbar />
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-3">
        <aside className="left-nav col-span-3"><LeftBar /></aside>
        <section className="content-area col-span-6 mx-3">
          <Outlet />
        </section>
        <aside className="right-nav col-span-3"><RightSidebar /></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
