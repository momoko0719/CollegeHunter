function AppDdl() {
  return (
    <div class="part-1">
      <div class="card-title">
          <h3>Application Deadlines</h3>
      </div>
      <div class="card-info">
          <p> <span class="date">Jan.1 </span> <span class="school-name">Harvard University</span> </p>
          <p> <span class="date">Jan.4 </span> <span class="school-name">Boston University</span> </p>
      </div>
    </div>
  )
}

function EssayQuestion() {
  return (
    <div class="part-2">
      <div class="card-title">
          <h3>Application Essay Questions</h3>
      </div>
      <div class="part">
          <p class="card-text"><span class="question">1. Common App Personal Essay <strong>[required] </strong></span><span class="school-name">Harvard University, Boston University</span></p>
          <p class="card-text">The essay demonstrates your ability to write clearly and concisely on a selected topic and helps you distinguish yourself in your own voice. What do you want the readers of your application to know about you apart from courses,
              grades, and test scores? Choose the option that best helps you answer that question and write an essay.</p>
          <p class="card-text">Maximum length: 650 words</p>
          <ul>
              <li><strong>Option1:</strong> Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.</li>
              <li><strong>Option2:</strong> The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from
                  the experience?
              </li>
              <li><strong>Option3:</strong> Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?</li>
              <li><strong>Option4:</strong> Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?</li>
              <li><strong>Option5:</strong> Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.</li>
              <li><strong>Option6:</strong> Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?</li>
              <li><strong>Option7:</strong> Share an essay on any topic of your choice. It can be one you‘ve already written, one that responds to a different prompt, or one of your own design.</li>
          </ul>
          <p class="card-text"><span class="question">2. Extracurricular Short Response <strong>[required] </strong></span><span class="school-name">Harvard University</span></p>
          <p class="card-text">Please briefly elaborate on one of your extracurricular activities or work experiences.</p>
          <p class="card-text">Maximum length: 150 words</p>
          <p class="card-text"><span class="question">3. Why This College Short Response <strong>[required] </strong></span><span class="school-name">Boston University</span></p>
          <p class="card-text">What about being a student at Boston University most excites you?</p>
      </div>
    </div>
  )
}

export default function Organizer() {
    return (
      <div>
        <header class="main-header">
          <h2>Manage Your Saved Schools</h2>
        </header>

    <main class="organizer-main">
        <div class="card m-5">
            <div class="card-body">
                <AppDdl />
                <EssayQuestion />
            </div>
        </div>
    </main>
      </div>
    );
  }