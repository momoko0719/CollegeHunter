import React from 'react';
import { useParams } from 'react-router-dom';
import SAMPLE_SCHOOLS from '../data/data.json'
import _ from 'lodash';

export default function InformationBody(props) {
    const params = useParams();
    let collegeNameString = params.collegeName;

    let college = _.find(SAMPLE_SCHOOLS, {name: collegeNameString});
    if(!college) return <h2>No College specified</h2>;


    let schoolName = college['name'];
    let schoolWebsite  = college['website'];
    let schoolImg = '/img/college/' + college['img'];
    let schoolRank = '#' + college['rank'];
    let schoolCity = college['city'];
    let schoolDDL = college['ddl'];
    let schoolSAT = college['sat'];
    let schoolTuition = college['tuition'];
    let schoolType = college['type'];
    // let schoolEssay = '/img/college/' + college['essayImg'];
    let schoolEssay = null;
    if (college['isCommon'] === false) {
        schoolEssay = <img src={'/img/college/' + college['essayImg']} className="pb-3" alt={schoolName}/>
    } else if (college['isCommon'] === true && college['essayImg'] === "") {
        schoolEssay = <img src='/img/college/commonapp.png' className="pb-3" alt={schoolName}/>
    } else {
        schoolEssay = <div>
            <img src='/img/college/commonapp.png' className="pb-3" alt={schoolName}/>
            <img src={'/img/college/' + college['essayImg']} className="pb-3" alt={schoolName}/>
        </div>
    }


    return (
        <div>

            <header className="info-header">
                <h2>
                    <a href={schoolWebsite}>{schoolName}</a>
                </h2>
            </header>

            <main className="info-main">
                <div className="card mb-5">
                    <div className="card shadow-sm">
                        <a href={schoolWebsite}><img src={schoolImg} className="pb-3" alt={schoolName}/></a>

                        <div className="card-body">

                            <div className="row">
                                <div className="col mb-2">
                                    <h2 className="card-title"><strong>Ranking</strong></h2>
                                    <p className="card-text">{schoolRank}</p>
                                    <h2 className="card-title"><strong>City</strong></h2>
                                    <p className="card-text">{schoolCity}</p>
                                </div>
                                <div className="col mb-2">
                                    <h2 className="card-title"><strong>Deadline</strong></h2>
                                    <p className="card-text">{schoolDDL}</p>
                                    <h2 className="card-title"><strong>SAT</strong></h2>
                                    <p className="card-text">{schoolSAT}</p>
                                </div>
                                <div className="col mb-2">
                                    <h2 className="card-title"><strong>Type</strong></h2>
                                    <p className="card-text">{schoolType}</p>
                                    <h2 className="card-title"><strong>Tuition/Year</strong></h2>
                                    <p className="card-text">{schoolTuition}</p>
                                </div>

                            </div>


                            <div className="col mb-2">
                                <h2 className="card-title"><strong>Essay Questions</strong></h2>
                                {schoolEssay}
                                {/* <img src={schoolEssay} className="pb-3" alt={schoolName}/> */}
                            </div>
                        </div>

                    </div>
                </div>
            </main>





        </div>
    )
}