import React from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Our from './components/Our';
import Open from './components/Open';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return(
        <>
            <Header />

            <Main />

            <About />

            <Our />

            <Open />

            <Solutions />

            {/* <Partners /> */}

            <Contact />

            <Footer />
        </>
    )
}

export default App;