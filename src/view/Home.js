import React from 'react';
import Navbar from '../container/Navbar';
import Jumbotron from '../container/Jumbotron';
import About from '../container/About';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <About />
        </div>
    );
}

export default Home;