import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import UpdateNews from '../Components/UpdateNews';



const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section>

                    <UpdateNews/>
                </section>

            </header>
            <main>
                <section className='left-nav'></section>
                <section className='content-area'>
                    <Outlet />



                </section>
                <section className='right-nav'></section>

            </main>



        </div>
    );
};

export default HomeLayout;