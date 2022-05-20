import React, { useState } from 'react';

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

function MainPageCardList() {
    
    
    
    return (
        <div className="card-groups m-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div className="card h-100 shadow-sm">
                    <img src="img/college/uw.jpg" className="card-img-top" alt="University of Washington" />
                    <div className="card-header">
                        University of Washington <button className='btn btn-outline-success' type='submit'>
                            <span class="material-symbols-outlined pt-1">add</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Type: Public school</p>
                        <p className="card-text">Ranking: 59</p>
                        <p className="card-text"><i className='fas fa-map-marker-alt'></i> Seattle, WA</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div className="card h-100 shadow-sm">
                    <img src="img/college/university-wisconsin-madison.jpg" className="card-img-top" alt="university-wisconsin-madison" />
                    
                    <div className="card-header">
                        University of Wisconsin-Madison <button className='btn btn-outline-success' type='submit'>
                            <span class="material-symbols-outlined pt-1">add</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Type: Public school</p>
                        <p className="card-text">Ranking: 42</p>
                        <p className="card-text"><i className='fas fa-map-marker-alt'></i> Madison, WI</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div className="card h-100 shadow-sm">
                    <img src="img/college/harvard.jpg" className="card-img-top" alt="harvard university" />
                    <div className="card-header">
                        Harvard University <button className='btn btn-outline-success' type='submit'>
                            <span class="material-symbols-outlined pt-1">add</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Type: Private school</p>
                        <p className="card-text">Ranking: 1</p>
                        <p className="card-text"><i className='fas fa-map-marker-alt'></i> Cambridge, MA</p>
                        <a href="info.html" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div className="card h-100 shadow-sm">
                    <img src="img/college/bu.jpg" className="card-img-top" alt="Boston University" />
                    <div className="card-header">
                        Boston University <button className='btn btn-outline-success' type='submit'>
                            <span class="material-symbols-outlined pt-1">add</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Type: Private school</p>
                        <p className="card-text">Ranking: 42</p>
                        <p className="card-text"><i className='fas fa-map-marker-alt'></i> Boston, MA</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default function MainPageBody() {
    return (
        <div>
            <MainPageFilter />
            <MainPageCardList />
        </div>
    )
}