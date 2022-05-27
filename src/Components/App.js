import React, { useState } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import _ from 'lodash';

import WelcomePage from './WelcomePage';
import MainPageBody from './MainPageBody';
import NavBar from './Layout';
import Organizer from './Organizer';
import InformationBody from './infoBody';
import Search from './Search';

function App(props) {
    let colleges = props.colleges;
    let [savedColleges, setSavedColleges] = useState([]);

    function addToSavedList(name) {
        let college = _.find(colleges, {name: name});
        let copy = savedColleges;
        console.log(college);
        // savedColleges.push(college);
        copy.push(college);
        setSavedColleges(copy);
        console.log(savedColleges);
    }

    console.log(savedColleges);

    return (
            <Routes>
                <Route path="/" element={<NavBar colleges={savedColleges} />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="search" element={<Search />}>
                        <Route path="search/:collegeName" element={<InformationBody />} />
                        <Route index element={<MainPageBody colleges={colleges} addCallback={addToSavedList} />} />
                    </Route>
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