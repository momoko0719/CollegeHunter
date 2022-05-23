export default function WelcomePage() {
    return (
        <div>
            <header className="welcome-header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>COLLEGE HUNTER</h1>
                        </div>
                        <div className="col">
                            <h2>A searching and organizing platform for your U.S. college application materials.</h2>
                        </div>
                    </div>
                </div>
            </header>

            <main className="welcome-main">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column col-md-6" id="left-content">
                            <div className="content-title">
                                <h3>A tool ease your college application process</h3>
                            </div>
                            <div className="content">
                                <p>
                                    The U.S. college application process is a complex and troublesome one.Applicants must consider various factors when selecting a college of their choice. College Hunter is a platform that aims to help high school senior students who are in college application
                                    season looking to search college admission information and organize application documents.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex flex-column col-md-6" id="right-content">
                            <div>
                                <div>
                                    <h3>
                                        Search colleges based on your preference
                                    </h3>
                                </div>
                                <div className="description">
                                    <p>
                                        Our platform provides a search engine for you to pick out the colleges you want to apply to based on school type, locations, scores, and rankings.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Save the information of school you like</h3>
                                </div>
                                <div className="description">
                                    <p>
                                        You could add the school you want to apply to by logging in our platform for regular admission information checks.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Organize the application materials for your saved school</h3>
                                </div>
                                <div className="description">
                                    <p>
                                        Instead of checking application requirements on multiple school websites, our organizer collected all the application timeline and essay questions on one page.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        

    
    );
  }