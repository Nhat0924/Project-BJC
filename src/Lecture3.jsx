import './Lectures.css'
import { useNavigate } from "react-router-dom";

function Lecture3() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/dashboard");
  }

  function handleNext() {
    navigate("/lecture4");
  }

  function handlePrev() {
    navigate("/lecture2");
  }

  return (
    <div>
      <button onClick={handleReturn}>Return to main page </button>
      {/* Hero Section */}
      <section id="hero">
        <header>
          <h1>Artificial Intelligence (AI)</h1>
        </header>
      </section>

      {/* Overview Section */}
      <section id="overview">
        <h2>Overview</h2>
        <div>
          <p>
              In this lesson, we will learn about advances in artificial intelligence and the ethics of artificial intelligence and robotics technology.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section id="definition">
        <h2>Definition</h2>
        <div>
          <p>
              Artificial intelligence (AI) is a field of computer science loosely defined as "trying to get computers to think."
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section id="explanation">
        <h2>Advances of AI</h2>
        <div>
          <p>
            Artificial intelligence (AI) and robotics technology have made remarkable advances in recent years, revolutionizing industries such as healthcare, transportation, and education. AI systems can now analyze vast amounts of data, make predictions, and even create original content. Robotics has advanced to include robots capable of complex tasks, from precision surgeries to autonomous driving. However, these advancements raise important ethical questions. For instance, how should society address job displacement caused by automation? How can we ensure AI systems remain unbiased and accountable? Additionally, as robots and AI take on roles that involve decision-making, developers must consider how to embed ethical frameworks that align with human values. Understanding these issues is crucial for shaping a future where AI and robotics benefit humanity while minimizing harm.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section id="video">
        <div>
          <p>
            Let's watch this video to understand AI better:
          </p>
          <iframe title="AIVideo" width="560" height="315" src="https://www.youtube.com/embed/KKNCiRWd_j0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activities">
        <h3>Activity</h3>
        <ol>
          <li>List three possible good consequences of computer face recognition.</li>
          <li>List three possible bad consequences of computer face recognition.</li>
          <li>Brainstorm suggestions for ways to encourage the good consequences while discouraging the bad ones.</li>
        </ol>
      </section>      

      {/* Reflection Section */}
      <section id="reflection">
        <h2>Reflection</h2>
        <p>
          Think about the following questions:
        </p>
        <ol>
          <li>How do you think artificial intelligence can impact our daily lives in both positive and negative ways?</li>
          <li>What ethical responsibilities do you think developers and society have when creating and using AI technologies?</li>
        </ol>
      </section>

      {/* Navigation */}
      <section id="navigation">
        <button onClick={handlePrev}>Previous Lecture </button>
        <button onClick={handleReturn}>Return to main page </button>
        <button onClick={handleNext}>Next Lecture </button>
      </section>
    </div>
  )
}

export default Lecture3;
