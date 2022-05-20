import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from './WelcomePage';
import MainPageBody from './MainPageBody';
import NavBar from './NavBar';
import Organizer from './Organizer';

function App() {
    return (
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="main" element={<MainPageBody />} />
                    <Route path="organizer" element={<Organizer />} />
                </Route>
            </Routes>
    );
}


// return (
//     <div className='container'>
//         <header>hahaha</header>
//         <main>
//             <MainPageBody />
//         </main>
//         <footer>hohoho</footer>
//     </div>
// )


export default App;