export default function Organizer(props) {
  let college = props.colleges
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
  if (ifCommon.includes(1)) {
    renderCommon = (
      <div>
        <p><strong>Common App Essay:</strong></p>
        <img src='/img/college/commonapp.png' className="essayimg" alt='common app essay' />
      </div>
    )
  }

  let renderEsssay = college.map((eachSchool) => {
    if (eachSchool['essayImg'] !== "") {
      return (
        <div>
          <p><strong>{eachSchool['name'] + ':'}</strong></p>
          <img src={'/img/college/' + eachSchool['essayImg']} className="essayimg" alt={eachSchool['name']} />
        </div>
      )
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
  return (
    <div>
      <header className="main-header">
        <h2>Manage Your Saved Schools</h2>
      </header>

      {/* <main className="organizer-main">
        <div className="card m-5">
          <div className="card-body">
            <AppDdl />
            <EssayQuestion />
          </div>
        </div>
      </main> */}

        <div className="card mb-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mb-2">
                  <AppDdl />
                  <EssayQuestion />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}