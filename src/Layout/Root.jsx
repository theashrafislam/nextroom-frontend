import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='grow'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;