import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from './WelcomePage';
import MainPageBody from './MainPageBody';
import NavBar from './Layout';
import Organizer from './Organizer';
import InformationBody from './infoBody';

function App(props) {
    let colleges = props.colleges;

    // let [filterCriteria, setFilterCriteria] = useState({collegeType: null, collegeLoc: {w: null, ne: null, mw: null, s: null}, collegeRank: {t1: null, t2: null, t3: null, t4: null}})
    return (
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="main" element={<MainPageBody colleges={colleges} />} />
                    <Route path="organizer" element={<Organizer />} />
                    <Route path='info/:name' element={<InformationBody colleges={colleges}/>} />
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