import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';


function MainPageFilter(props) {
    
    // let [collegeType, setCollegeType] = useState({public: false, private: false});
    let [isPublic, setIsPublic] = useState(false);
    let [isPrivate, setIsPrivate] = useState(false);

    let [isWest, setIsWest] = useState(false);
    let [isNE, setIsNE] = useState(false);
    let [isMW, setIsMW] = useState(false);
    let [isSouth, setIsSouth] = useState(false);

    let [isT1, setIsT1] = useState(false);
    let [isT2, setIsT2] = useState(false);
    let [isT3, setIsT3] = useState(false);
    let [isT4, setIsT4] = useState(false);

    let [textInput, setTextInput] = useState("");

    let inputHandler = (event) => {
        let lowerCaseInput = event.target.value.toLowerCase();
        setTextInput(lowerCaseInput);
        // console.log(textInput);
    }

    let handlePub = (event) => {
        let pubCheck = event.target.checked;
        if (isPublic != pubCheck) {
            setIsPublic(pubCheck);
            // console.log("pub!");
        }
    }
    
    let handlePriv = (event) => {
        let privCheck = event.target.checked;
        // console.log([isPrivate, privCheck])
        if (isPrivate != privCheck) {
            setIsPrivate(privCheck);
            // console.log("priv!");
        }
    }

    let handleWest = (event) => {
        let westCheck = event.target.checked;
        if (isWest != westCheck) {
            setIsWest(westCheck);
        }
    }

    let handleNE = (event) => {
        let neCheck = event.target.checked;
        if (isNE != neCheck) {
            setIsNE(neCheck);
        }
    }

    let handleMW = (event) => {
        let mwCheck = event.target.checked;
        if (isMW != mwCheck) {
            setIsMW(mwCheck);
        }
    }

    let handleSouth = (event) => {
        let southCheck = event.target.checked;
        if (isSouth != southCheck) {
            setIsSouth(southCheck);
            // console.log("South!!!")
        }
    }

    let handleT1 = (event) => {
        let t1Check = event.target.checked;
        if (isT1 != t1Check) {
            setIsT1(t1Check);
        }
    }

    let handleT2 = (event) => {
        let t2Check = event.target.checked;
        if (isT2 != t2Check) {
            setIsT2(t2Check);
        }
    }

    let handleT3 = (event) => {
        let t3Check = event.target.checked;
        if (isT3 != t3Check) {
            setIsT3(t3Check);
        }
    }

    let handleT4 = (event) => {
        let t4Check = event.target.checked;
        if (isT4 != t4Check) {
            setIsT4(t4Check);
        }
    }

    return (
        <div>
            <header className="main-header">
                <h2>Come and hunt your target college!</h2>
            </header>
            <div className="search-bar">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type to search your target college" aria-label="full name of college with two button addons" onChange={inputHandler} />
                    <button className="btn btn-primary" type="button" onClick={() => {props.applySearchCallback(textInput)}}>Search</button>
                    <button className="btn btn-outline-secondary" type="submit" onClick={() => {props.applyFilterCallback(isPublic, isPrivate, isWest, isNE, isMW, isSouth, isT1, isT2, isT3, isT4)}}>Apply Filter</button>
                </div>
            </div>

            <div className="card m-5 shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <div className="filter-form">
                        <div className="mb-3">
                            <form>
                                <label htmlFor="formOption" className="form-label font-weight-bold">College Type</label>
                                <div id="formOption">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput1" value="option1" checked={isPublic} onChange={handlePub} />
                                        <label className="form-check-label" htmlFor="formInput1">Public School</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput2" value="option2" checked={isPrivate} onChange={handlePriv}/>
                                        <label className="form-check-label" htmlFor="formInput1">Private School</label>
                                    </div>
                                </div>

                                <label htmlFor="formOption2" className="form-label mt-3 font-weight-bold">College Location</label>
                                <div id="formOption2">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput1" value="option2" checked={isWest} onChange={handleWest} />
                                        <label className="form-check-label" htmlFor="formInput1">The WEST</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput2" value="option2" checked={isNE} onChange={handleNE} />
                                        <label className="form-check-label" htmlFor="formInput1">The NORTH-EAS</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput3" value="option2" checked={isMW} onChange={handleMW} />
                                        <label className="form-check-label" htmlFor="formInput1">The MIDWEST</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput4" value="option2" checked={isSouth} onChange={handleSouth} />
                                        <label className="form-check-label" htmlFor="formInput1">The SOUTH</label>
                                    </div>
                                </div>

                                <label htmlFor="formOption3" className="form-label mt-3 font-weight-bold">College Ranking</label>
                                <div id="formOption3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput1" value="option1" checked={isT1} onChange={handleT1} />
                                        <label className="form-check-label" htmlFor="formInput1">1-15</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput2" value="option2" checked={isT2} onChange={handleT2} />
                                        <label className="form-check-label" htmlFor="formInput1">15-30</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput2" value="option2" checked={isT3} onChange={handleT3} />
                                        <label className="form-check-label" htmlFor="formInput1">31-50</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="formInput2" value="option2" checked={isT4} onChange={handleT4} />
                                        <label className="form-check-label" htmlFor="formInput1">After 50</label>
                                    </div>
                                </div>
                            </form>

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
    let schoolImage = '/img/college/' + college.img;
    let schoolRank = 'Ranking: ' + college.rank;

    let [isSaved, setIsSaved] = useState(false);
    let [btnStyle, setBtnStyle] = useState(["success", "add"]);

    let handleClick = (event) => {
        if (!isSaved) {
            setIsSaved(true);
        } else {
            setIsSaved(false);
        }
        if (btnStyle[0] == "success") {
            setBtnStyle(["danger", "close"]);
            props.addCallback(schoolName);
        } else {
            setBtnStyle(["success", "add"]);
            props.deleteCallback(schoolName);
        }
    }

    return (
        <div className="col-md-6 col-lg-6 col-xl-3 d-flex mb-4">
            <div className="card h-100 shadow-sm">
                <img src={schoolImage} className="card-img-top" alt={schoolName} />
                <div className="card-header">
                    {schoolName} <button className={'btn btn-outline-' + btnStyle[0]} type='submit' onClick={handleClick}>
                        <span className="material-symbols-outlined pt-1">{btnStyle[1]}</span>
                    </button>
                </div>
                <div className="card-body">
                    <p className="card-text">{schoolType}</p>
                    <p className="card-text">{schoolRank}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faMapPin} /> {schoolCity}</p>
                    <Link to={'search/' + schoolName} className="btn btn-primary">Learn More</Link>
                </div>
            </div>
        </div>

    )
}



function MainPageCardList(props) {
    let colleges = props.colleges;
    // console.log(colleges)
    let cardsArray = colleges.map((college) => {
        // console.log(college.key)
        return <CollegeCard myKey={college.key} college={college} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />
    })

    if(cardsArray == 0) {
        return(
            <h2 className='m-5'><FontAwesomeIcon icon={faFaceFrown} /> No results found</h2>
        )
    } else {
        return (
            <div className="card-groups m-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {cardsArray}
                </div>
            </div>
        )
    }


    // return (
    //     <div className="card-groups m-5">
    //         <div className="row row-cols-1 row-cols-md-3 g-4">
    //             {cardsArray}
    //         </div>
    //     </div>
    // )
}

export default function MainPageBody(props) {
    let colleges = props.colleges;

    let [collegeType, setCollegeType] = useState({public: false, private: false});
    let [collegeLoc, setCollegeLoc] = useState({w: false, ne: false, mw: false, s: false});
    let [collegeRank, setCollegeRank] = useState({t1: false, t2: false, t3: false, t4: false});

    let applyFilter = (pub, priv, west, northeast, midwest, south, r1, r2, r3, r4) => {
        setCollegeType({public: pub, private: priv});
        setCollegeLoc({w: west, ne: northeast, mw: midwest, s: south});
        setCollegeRank({t1: r1, t2: r2, t3: r3, t4: r4});
    }



    let [textInput, setTextInput] = useState("");

    let applySearch = (searchString) => {
        setTextInput(searchString)
    }

    let isPublic = collegeType.public;
    let isPrivate = collegeType.private;

    let isWest = collegeLoc.w;
    let isNE = collegeLoc.ne;
    let isMW = collegeLoc.mw;
    let isSouth = collegeLoc.s;

    let isT1 = collegeRank.t1;
    let isT2 = collegeRank.t2;
    let isT3 = collegeRank.t3;
    let isT4 = collegeRank.t4;

    if(textInput == "") {
        colleges = colleges;
    } else {

        colleges = colleges.filter((college) => college.name.toLowerCase().includes(textInput));
    }

    // First Row filter:
    if (isPublic == true && isPrivate == false) {
        colleges = colleges.filter((college) => college.type == 'Public School');
    } else if (isPublic == false && isPrivate == true) {
        colleges = colleges.filter((college) => college.type == 'Private School');
    }

    if (!(isWest == true && isNE == true && isMW == true && isSouth == true) && !(isWest == false && isNE == false && isMW == false && isSouth == false)) {
        console.log("nmsl")
        let collegesCopy = [];
        if (collegeLoc.w == true) {
            let addCollege = colleges.filter(college => college.location == "The WEST")
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (collegeLoc.ne == true) {
            let addCollege = colleges.filter(college => college.location == "The NORTH-EAS")
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (collegeLoc.mw == true) {
            let addCollege = colleges.filter(college => college.location == "The MIDWEST")
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (collegeLoc.s == true) {
            let addCollege = colleges.filter(college => college.location == "The SOUTH")
            console.log(addCollege);
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        colleges = collegesCopy;
    }

    if (!(isT1 == true && isT2 == true && isT3 == true && isT4 == true) && !(isT1 == false && isT2 == false && isT3 == false && isT4 == false)) {
        console.log("qnmd");
        let collegesCopy = [];
        if (isT1 == true) {
            let addCollege = colleges.filter(college => college.rank >= 1 && college.rank <= 15)
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (isT2 == true) {
            let addCollege = colleges.filter(college => college.rank >= 16 && college.rank <= 30)
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (isT3 == true) {
            let addCollege = colleges.filter(college => college.rank >= 31 && college.rank <= 50)
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        if (isT4 == true) {
            let addCollege = colleges.filter(college => college.rank > 50)
            console.log(addCollege);
            for (let college of addCollege) {
                collegesCopy.push(college);
            }
        }
        colleges = collegesCopy;
    }

    console.log(colleges);

    return (
        <div>
            <MainPageFilter applyFilterCallback={applyFilter} applySearchCallback={applySearch} />                                            
            <MainPageCardList colleges={colleges} addCallback={props.addCallback} deleteCallback={props.deleteCallback} />
        </div>
    )
}