import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainPageFilter() {
    return (
        <div>
            <header class="main-header">
                <h2>Come and hunt your target college!</h2>
            </header>
            <div className="search-bar">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type full name of the college" aria-label="full name of college with two button addons" />
                    <button className="btn btn-primary" type="button">Search</button>
                    <button className="btn btn-outline-secondary" type="button">Filter</button>
                </div>
            </div>

            <div className="card m-5 shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <div className="filter-form">
                        <div className="mb-3">
                            <label for="formOption" className="form-label font-weight-bold">College Type</label>
                            <div id="formOption">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput1" value="option1" />
                                    <label className="form-check-label" for="formInput1">Public School</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">Private School</label>
                                </div>
                            </div>

                            <label for="formOption2" className="form-label mt-3 font-weight-bold">College Location</label>
                            <div id="formOption2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput1" value="option1" />
                                    <label className="form-check-label" for="formInput1">The WEST</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">The NORTH-EAS</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">The MIDWEST</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">The SOUTH</label>
                                </div>
                            </div>

                            <label for="formOption3" className="form-label mt-3 font-weight-bold">College Ranking</label>
                            <div id="formOption3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput1" value="option1" />
                                    <label className="form-check-label" for="formInput1">1-15</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">15-30</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">31-50</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="formInput2" value="option2" />
                                    <label className="form-check-label" for="formInput1">After 50</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CollegeCard(props) {
    let college = props.college;
    let schoolName = college.name;
    let schoolType = 'Type: ' + college.type;
    let schoolCity = college.city;
    let schoolImage = '../img/college/' + college.img;
    let schoolRank = 'Ranking: ' + college.rank;

    return (
        <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
            <div className="card h-100 shadow-sm">
                <img src={schoolImage} className="card-img-top" alt={schoolName} />
                <div className="card-header">
                    {schoolName} <button className='btn btn-outline-success' type='submit'>
                        <span class="material-symbols-outlined pt-1">add</span>
                    </button>
                </div>
                <div className="card-body">
                    <p className="card-text">{schoolType}</p>
                    <p className="card-text">{schoolRank}</p>
                    <p className="card-text"><i className='fas fa-map-marker-alt'></i> {schoolCity}</p>
                    <Link to="/info" className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>

    )
}



function MainPageCardList(props) {
    let colleges = props.colleges;
    let cardsArray = colleges.map((college) => {
        return <CollegeCard college={college} key={college.name} />
    })


    return (
        <div className="card-groups m-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cardsArray}
            </div>
        </div>
    )
}

export default function MainPageBody(props) {
    let colleges = props.colleges;
    return (
        <div>
            <MainPageFilter />
            <MainPageCardList colleges={colleges}/>
        </div>
    )
}