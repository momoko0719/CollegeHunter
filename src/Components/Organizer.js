let college = [
  { "key": 1, "name": "University of Washington", "type": "Public School", "location": "The WEST", "city": "Seattle, WA", "rank": 59, "ddl": "Nov. 15", "sat": "1,200 ~ 1,470", "tuition": "$39,906", "essayImg": "uwEssay.png", "website": "https://www.washington.edu/", "img": "uw.jpg", "isCommon": false },
  { "key": 2, "name": "University of Wisconsin-Madison", "type": "Public School", "location": "The MIDWEST", "city": "Madison, WI", "rank": 42, "ddl": "Feb. 1", "sat": "1,260 ~ 1,460", "tuition": "$38,608", "essayImg": "uwmEssay.png", "website": "https://www.wisc.edu/", "img": "university-wisconsin-madison.jpg", "isCommon": false },
  { "key": 3, "name": "Harvard University", "type": "Private School", "location": "The NORTH-EAS", "city": "Cambridge, MA", "rank": 1, "ddl": "Jan. 1", "sat": "1,460 ~ 1,580", "tuition": "$55,587", "essayImg": "", "website": "https://www.harvard.edu/", "img": "harvard.jpg", "isCommon": true },
  { "key": 4, "name": "Boston University", "type": "Private School", "location": "The NORTH-EAS", "city": "Boston, MA", "rank": 42, "ddl": "Jan. 4", "sat": "1,310 ~ 1,500", "tuition": "$59,816", "essayImg": "buEssay.png", "website": "https://www.bu.edu/", "img": "bu.jpg", "isCommon": true },
  { "key": 5, "name": "University of California--Los Angeles", "type": "Public School", "location": "The WEST", "city": "Los Angeles, CA", "rank": 14, "ddl": "Nov. 30", "sat": "1,300 ~ 1,530", "tuition": "$43,003", "essayImg": "ucEssay.png", "website": "https://www.ucla.edu/", "img": "ucla.jpg", "isCommon": false },
  { "key": 6, "name": "University of California--Irvine", "type": "Public School", "location": "The WEST", "city": "Irvine, CA", "rank": 36, "ddl": "Nov. 30", "sat": "1,230 ~ 1,430", "tuition": "$43,507", "essayImg": "ucEssay.png", "website": "https://www.uci.edu/", "img": "uci.jpg", "isCommon": false },
  { "key": 7, "name": "Emory University", "type": "Private School", "location": "The SOUTH", "city": "Atlanta, GA", "rank": 21, "ddl": "Jan. 1", "sat": "1,380 ~ 1,530", "tuition": "$53,868", "essayImg": "emoryEssay.png", "website": "https://www.emory.edu/home/index.html", "img": "emory.jpg", "isCommon": false },
  { "key": 8, "name": "Stanford University", "type": "Private School", "location": "The WEST", "city": "Stanford, CA", "rank": 6, "ddl": "Jan. 2", "sat": "1,420 ~ 1,570", "tuition": "$56,169", "essayImg": "stanfordEssay.png", "website": "https://www.stanford.edu/", "img": "stanford.jpg", "isCommon": true },
  { "key": 9, "name": "Pennsylvania State University", "type": "Public School", "location": "The NORTH-EAS", "city": "University Park, PA", "rank": 63, "ddl": "rolling", "sat": "1,160 ~ 1,360", "tuition": "$35,514", "essayImg": "psuEssay.png", "website": "https://www.psu.edu/", "img": "psu.jpg", "isCommon": true }
]

// ----------------------------------------------------------------------------
let findDdl = college.map((eachSchool) => {
  return <p> <span className="date">{eachSchool['ddl'] + ' '}</span> <span className="school-name">{eachSchool['name']}</span> </p>
})

function AppDdl() {
  return (
    <div className="part-1">
      <div className="card-title">
        <h3>Application Deadlines</h3>
      </div>
      <div className="card-info">
        {findDdl}
      </div>
    </div>
  )
}
// ----------------------------------------------------------------------------
let ifCommon = college.map((eachSchool) => {
  let count = 0
  if (eachSchool['isCommon'] === true) {
    count++
  }
  return count
})

let renderCommon = null
if (ifCommon.length > 1) {
  renderCommon = <img src='/img/college/commonapp.png' className="pb-3" alt='common app essay'/>
}

let renderEsssay = college.map((eachSchool) => {
  if (eachSchool['essayImg'] !== "") {
    return <img src={'/img/college/' + eachSchool['essayImg']} className="pb-3" alt={eachSchool['name']}/>
  }
})

function EssayQuestion() {
  return (
    <div className="part-2">

      <div className="card-title">
        <h3>Application Essay Questions</h3>
      </div>

      <div>
        {renderCommon}
        {renderEsssay}
      </div>

    </div>
  )
}
// ----------------------------------------------------------------------------
export default function Organizer() {
  return (
    <div>
      <header className="main-header">
        <h2>Manage Your Saved Schools</h2>
      </header>

      <main className="organizer-main">
        <div className="card m-5">
          <div className="card-body">
            <AppDdl />
            <EssayQuestion />
          </div>
        </div>
      </main>
    </div>
  );
}