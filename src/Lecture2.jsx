import './Lectures.css'
import { useNavigate } from "react-router-dom";

function Lecture2() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/dashboard");
  }

  function handleNext() {
    navigate("/lecture3");
  }

  function handlePrev() {
    navigate("/lecture1");
  }

  return (
    <div>
      <button onClick={handleReturn}>Return to main page </button>
      {/* Hero Section */}
      <section id="hero">
        <header>
          <h1>Binary Digits</h1>
        </header>
      </section>

      {/* Overview Section */}
      <section id="overview">
        <h2>Overview</h2>
        <div>
          <p>
            In this lesson, we will explore how binary digits (bits) work. Binary is a base-2 number system that uses two symbols, typically 0 and 1. It is the foundation of all modern computing.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section id="explanation">
        <h2>How Binary Digits Work</h2>
        <div>
          <p>
            Binary numbers are made up of only 0s and 1s. Each digit in a binary number is called a bit. The rightmost bit is the least significant bit (LSB), and the leftmost bit is the most significant bit (MSB).
          </p>
          <p>
            Each bit represents a power of 2, starting from 2<sup>0</sup> on the right. For example, the binary number 1011 represents:
          </p>
          <ul>
            <li>1 × 2<sup>3</sup> (8) + 0 × 2<sup>2</sup> (0) + 1 × 2<sup>1</sup> (2) + 1 × 2<sup>0</sup> (1) = 11 in decimal.</li>
          </ul>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activities">
        <h3>Activities</h3>
        <ol>
          <li>Convert the following binary numbers to decimal: 1101, 1010, 1111.</li>
          <li>Convert the following decimal numbers to binary: 5, 9, 14.</li>
          <li>Explain why binary is used in computers.</li>
        </ol>
      </section>

      {/* Video Section */}
      <section id="video">
        <div>
          <p>
            Let's watch this video to understand binary numbers better:
          </p>
          <iframe title="BinaryDigitsVideo" width="560" height="315" src="https://www.youtube.com/embed/TDL4c8fMODk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection">
        <h2>Reflection</h2>
        <p>
          Think about the following questions:
        </p>
        <ol>
          <li>How would you explain binary numbers to someone who has never heard of them before?</li>
          <li>Why do you think binary is an efficient way to represent data in computers?</li>
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

export default Lecture2;
