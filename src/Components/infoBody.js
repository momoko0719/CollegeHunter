import React from 'react';



export default function InformationBody(props) {
    // replace test data with props later
    let xxx = {"name":"University of Washington", "type":"Public School", "location":"The WEST", "city":"Seattle, WA", "rank":"59", "ddl":"Nov. 15", "sat":"1,200 ~ 1,470", "tuition":"$39,906", "img":"uw.jpg","website":"https://www.washington.edu/"}
    let TEST_DATA = { "name": "Harvard University", "type": "Private school", "location": "The NORTH-EAS", "city": "Cambridge, MA", "rank": "1", "ddl": "Jan. 1", "sat": "1,460 ~ 1,580", "tuition": "$55,587", "img": "harvard.jpg", "website": "https://www.harvard.edu/" }
    
    let schoolName = xxx['name']
    let schoolWebsite = xxx['website']
    let schoolImg = '../img/college/' + xxx['img']
    let schoolRank = '#' + xxx['rank']
    let schoolCity = xxx['city']
    let schoolDDL = xxx['ddl']
    let schoolSAT = xxx['sat']
    let schoolTuition = xxx['tuition']
    let schoolType = xxx['type']

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
                                <p><em>Gotta have some essay pics later</em></p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>





        </div>
    )
}