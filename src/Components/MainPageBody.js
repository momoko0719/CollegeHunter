import React, { useState } from 'react';

function MainPageFilter() {
    return (
        <div class="card m-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
            <div class="filter-form">
                <div class="mb-3">
                    <label for="formOption" class="form-label font-weight-bold">College Type</label>
                    <div id="formOption">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput1" value="option1" />
                            <label class="form-check-label" for="formInput1">Public School</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">Private School</label>
                        </div>
                    </div>

                    <label for="formOption2" class="form-label mt-3 font-weight-bold">College Location</label>
                    <div id="formOption2">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput1" value="option1" />
                            <label class="form-check-label" for="formInput1">The WEST</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">The NORTH-EAS</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">The MIDWEST</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">The SOUTH</label>
                        </div>
                    </div>

                    <label for="formOption3" class="form-label mt-3 font-weight-bold">College Ranking</label>
                    <div id="formOption3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput1" value="option1" />
                            <label class="form-check-label" for="formInput1">1-15</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">15-30</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">31-50</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="formInput2" value="option2" />
                            <label class="form-check-label" for="formInput1">After 50</label>
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
        <div class="card-groups m-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="img/college/uw.jpg" class="card-img-top" alt="University of Washington" />
                    <div class="card-header">University of Washington</div>
                    <div class="card-body">
                        <p class="card-text">Type: Public school</p>
                        <p class="card-text">Ranking: 59</p>
                        <p class="card-text"><i class='fas fa-map-marker-alt'></i> Seattle, WA</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="img/college/university-wisconsin-madison.jpg" class="card-img-top" alt="university-wisconsin-madison" />
                    <div class="card-header">University of Wisconsin-Madison</div>
                    <div class="card-body">
                        <p class="card-text">Type: Public school</p>
                        <p class="card-text">Ranking: 42</p>
                        <p class="card-text"><i class='fas fa-map-marker-alt'></i> Madison, WI</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="img/college/harvard.jpg" class="card-img-top" alt="harvard university" />
                    <div class="card-header">Harvard University</div>
                    <div class="card-body">
                        <p class="card-text">Type: Private school</p>
                        <p class="card-text">Ranking: 1</p>
                        <p class="card-text"><i class='fas fa-map-marker-alt'></i> Cambridge, MA</p>
                        <a href="info.html" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="img/college/bu.jpg" class="card-img-top" alt="Boston University" />
                    <div class="card-header">Boston University</div>
                    <div class="card-body">
                        <p class="card-text">Type: Private school</p>
                        <p class="card-text">Ranking: 42</p>
                        <p class="card-text"><i class='fas fa-map-marker-alt'></i> Boston, MA</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
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